import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { commonService } from 'src/app/common/services/common.service';
import { Http } from '@angular/http';
import swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

interface paginationModel {
  currentPage: number;
  pageSize: number;
  searchString: string;
}

@Component({
  selector: 'question-list',
  templateUrl: './questionList.html',
  providers: [commonService]
})
export class questionListComponent implements OnInit {
  // Declaration

  public examID = "";
  public url = 'api/Questions';
  public questionForm: FormGroup;
  public categoryList = [];
  public departmentsUrl = 'api/Dropdown/Departments';

  singleSelectFlag: boolean;
  multipleSelectFlag: boolean;
  multipleSelectEdit: boolean;
  singleSelectEdit: boolean;

  public params: any = {
    currentPage: 1,
    pageSize: 10,
    searchString: ''
  };

  public i: Number = 0;
  public startrecordno: Number = 1;
  public endrecord: Number = 1;
  public recordno = 0;
  public totalItems = 0;
  public questionList = [];
  public questionListUrl = 'api/Questions/listQuestionsByExamId';

  public formDataCustom: any = {
    examId: '',
    categoryId: '',
    questionType: null,
    question: '',
    isActive: true,
    options: [],
    isDeleted: false
  };

  constructor(public fb: FormBuilder, private route: ActivatedRoute, public router: Router, private CommonService: commonService, public http: Http, private toastr: ToastrService) {
    this.route.params.subscribe(params => {
      this.examID = params['id'];
    });

    this.questionForm = this.fb.group({
      questionCategory: new FormControl(''),
      questionType: new FormControl(''),
      questionText: new FormControl(''),
      examID: new FormControl(this.examID),
      singleSelectOptionsCorrectAns: new FormControl(null),
      obj_multiSelectOptions: this.fb.array([this.fn_addSubMultipleSelectOption()]),
      obj_singleSelectOptions: this.fb.array([this.fn_addSubSingleSelectOption()]),
    });
  }


  fn_addSubMultipleSelectOption() {
    return this.fb.group({
      multipleSelectOptions: null,
      multipleSelectOptionsCorrectAns: null
    })
  }

  fn_addSubSingleSelectOption() {
    return this.fb.group({
      singleSelectOptions: null
    })
  }

  ngOnInit() {
    this.fn_GetQuestionsList();
    this.disbleAllFlag();
    this.multipleSelectEdit = false;
    this.singleSelectEdit = false;

    this.CommonService.fn_Get(this.departmentsUrl).subscribe(
      (data: any) => {
        this.categoryList = data.data;
      },
      err => console.error(err),
      () => { }
    );
    this.fn_clear_obj_multiSelectOptions();
    this.fn_clear_obj_singleSelectOptions();
  }


  disbleAllFlag() {
    this.singleSelectFlag = false;
    this.multipleSelectFlag = false;
  }



  // Function for  pagination
  setRecordPerPage(event: any): void {
    this.params.currentPage = 1;
    this.params.pageSize = event.target.value;
  }
  pageChanged(event: any): void {
    this.params.currentPage = parseInt(event.page);
    this.params.pageSize = parseInt(event.itemsPerPage);
  }
  // Searching
  searchRecord(event: any): void { }

  // Function to get list of employees

  fn_GetQuestionsList() {
    const prop: paginationModel = {
      currentPage: parseInt(this.params.currentPage),
      pageSize: parseInt(this.params.pageSize),
      searchString: this.params.searchString
    };
    const questionModel =
    {
      "id": this.examID,
      "filter": "string",
      "pageSize": 0,
      "pageNumber": 0,
      "totleRecords": 0,
      "filterBy": "string",
      "sortBy": "string",
      "isDescending": true
    }
    this.CommonService.fn_PostWithData(questionModel, this.questionListUrl).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.questionList = rs.data;
      }
      else {
      }
    });
  }

  // // FUnction to get employee ID
  // fn_getEmployee(empid) { }
  // // function to display the alert before deleting the Order.
  // fn_deleteEmployee(Id) {
  //   if (Id != null) {
  //     swal({
  //       title: 'Are you sure?',
  //       text: 'You want to delete the Employee!',
  //       buttonsStyling: true,
  //       confirmButtonClass: 'btn btn-success',
  //       showCancelButton: true,
  //       cancelButtonClass: 'btn btn-danger',
  //       confirmButtonText: 'Yes, delete it!'
  //     }).then(x => {
  //       if (x.value = true) {
  //         const url = 'api/User/InactivateUser';
  //         const model = {
  //           id: ''
  //           // deletedBy: 0
  //         };
  //         model.id = Id;
  //         // obj_SearchDetails.deletedBy = 1;
  //         this.fn_delfun(url, model);
  //       }

  //     });
  //   }
  // }

  onSubmit = function (formData) {
    if (this.questionForm.valid) {

      if (formData.value.questionType == 'SingleSelect') {
        this.fn_clear_obj_multiSelectOptions();
        this.formDataCustom.questionType = 0;
        var options = [];
        for (let key in formData.value.obj_singleSelectOptions) {
          var isCorrectVal = false;
          if (key === formData.value.singleSelectOptionsCorrectAns) isCorrectVal = true;
          options.push({ option: formData.value.obj_singleSelectOptions[key]['singleSelectOptions'], isCorrect: isCorrectVal });
        }
      }

      else if (formData.value.questionType == 'multipleSelect') {
        this.fn_clear_obj_singleSelectOptions();
        this.formDataCustom.questionType = 1;
        var options = [];
        for (let key in formData.value.obj_multiSelectOptions) {
          var isCorrectVal = false;
          if (formData.value.obj_multiSelectOptions[key]['multipleSelectOptionsCorrectAns']) isCorrectVal = true;
          options.push({ option: formData.value.obj_multiSelectOptions[key]['multipleSelectOptions'], isCorrect: isCorrectVal });
        }
      }

      else {
        this.fn_clear_obj_singleSelectOptions();
        this.fn_clear_obj_multiSelectOptions();
        this.formDataCustom.questionType = 2;
        var options = [];
      }

      this.formDataCustom.options = options;
      this.formDataCustom.question = formData.value.questionText;
      this.formDataCustom.categoryId = formData.value.questionCategory;
      this.formDataCustom.examId = this.examID;
      this.CommonService.fn_PostWithData(this.formDataCustom, this.url).subscribe((result: any) => {
        const rs = result;
        if (rs.statusCode == 200) {
          this.toastr.success('Question added successfully!');
          //this.router.navigate(['manage/questionList'], { queryParams: { id: this.examID } });
        }
        else {
          this.toastr.error('Failed to add Question');
        }
      });
    }
    else {
      return;
    }
    this.fn_GetQuestionsList();
    this.fun_resetAll();
  }

  fun_resetAll() {
    this.questionForm.controls.questionCategory.setValue('');
    this.questionForm.controls.questionType.setValue('');
    this.questionForm.controls.questionText.setValue('');
    this.questionForm.controls.singleSelectOptionsCorrectAns.setValue(null);
    this.questionForm.controls.obj_multiSelectOptions.reset();
    this.questionForm.controls.obj_singleSelectOptions.reset();
    this.fn_clear_obj_multiSelectOptions();
    this.fn_clear_obj_singleSelectOptions();
    this.disbleAllFlag();
  }

  fn_clear_obj_multiSelectOptions() {
    const control_obj_multiSelectOptions = <FormArray>(
      this.questionForm.controls["obj_multiSelectOptions"]
    );
    this.multipleSelectEdit = false;
    var obj_multiSelectOptions_count = control_obj_multiSelectOptions.length;
    for (var i = 0; i < obj_multiSelectOptions_count; i++) {
      control_obj_multiSelectOptions.removeAt(control_obj_multiSelectOptions.length - 1);
    }
  }

  fn_clear_obj_singleSelectOptions() {
    this.singleSelectEdit = false;
    this.questionForm.controls.singleSelectOptionsCorrectAns.setValue(null);
    const control_obj_singleSelectOptions = <FormArray>(
      this.questionForm.controls["obj_singleSelectOptions"]
    );
    var obj_singleSelectOptions_count = control_obj_singleSelectOptions.length;
    for (var i = 0; i < obj_singleSelectOptions_count; i++) {
      control_obj_singleSelectOptions.removeAt(control_obj_singleSelectOptions.length - 1);
    }
  }

  addSubstractMultipleSelectOptions(actionType) {
    const control = <FormArray>(
      this.questionForm.controls["obj_multiSelectOptions"]
    );
    this.multipleSelectEdit = true;
    if (actionType == 'add') {
      if (control.length >= 5) {
        this.toastr.warning('Can add only Max 5 Options');
      }
      else {
        control.push(this.fn_addSubMultipleSelectOption());
      }
    }

    if (actionType == 'sub') {
      if (control.length <= 2) {
        this.toastr.warning('Min 2 Options are Mandatory');
      }
      else {
        control.removeAt(control.length - 1);
      }
    }
  }

  addSubstractSingleSelectOptions(actionType) {
    const control = <FormArray>(
      this.questionForm.controls["obj_singleSelectOptions"]
    );
    this.singleSelectEdit = true;
    if (actionType == 'add') {
      if (control.length >= 5) {
        this.toastr.warning('Can add only Max 5 Options');
      }
      else {
        control.push(this.fn_addSubSingleSelectOption());
      }
    }
    if (actionType == 'sub') {
      if (control.length <= 2) {
        this.toastr.warning('Min 2 Options are Mandatory');
      }
      else {
        control.removeAt(control.length - 1);
      }
    }
  }

  loadOptions(questionTypeValue) {
    this.disbleAllFlag();
    if (questionTypeValue == "multipleSelect") {
      this.multipleSelectFlag = true;
      if (this.multipleSelectEdit === false) {
        const control = <FormArray>(
          this.questionForm.controls["obj_multiSelectOptions"]
        );
        control.push(this.fn_addSubMultipleSelectOption());
        control.push(this.fn_addSubMultipleSelectOption());
        this.multipleSelectEdit = true;
      }
    }
    if (questionTypeValue == "SingleSelect") {
      this.singleSelectFlag = true;
      if (this.singleSelectEdit === false) {
        const control = <FormArray>(
          this.questionForm.controls["obj_singleSelectOptions"]
        );
        control.push(this.fn_addSubSingleSelectOption());
        control.push(this.fn_addSubSingleSelectOption());
        this.singleSelectEdit = true;
      }
    }
  }

  // // function for soft deleting the Employee.
  // fn_delfun(url, data) {
  //   this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
  //     const rs = result;
  //     if ((result.message = 'Success')) {
  //       this.toastr.success('Employee details deleted successfully!');
  //       this.fn_GetQuestionsList();
  //     }
  //   });
  // }
}
