import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { commonService } from 'src/app/common/services/common.service';
import { Http } from '@angular/http';
import swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'question-list',
  templateUrl: './questionList.html',
  providers: [commonService]
})
export class questionListComponent implements OnInit {

  public examID = "";
  public url = '';
  public questionForm: FormGroup;
  public categoryList = [];
  public departmentsUrl = 'api/Dropdown/Departments';

  singleSelectFlag: boolean;
  multipleSelectFlag: boolean;
  multipleSelectEdit: boolean;
  singleSelectEdit: boolean;

  public questionModel: any = {
    "id": this.examID,
    "filter": "string",
    "pageSize": 10,
    "pageNumber": 1,
    "totleRecords": 0,
    "filterBy": "string",
    "sortBy": "string",
    "isDescending": true
  }

  public i: Number = 0;
  public startrecordno: Number = 1;
  public endrecord: Number = 1;
  public recordno = 0;
  public totalItems = 10;
  public questionList = [];
  public questionDetail: any;
  public questionListUrl = 'api/Questions/listQuestionsByExamId';
  public questionDetailUrl = 'api/Questions/GetQuestionById';


  public formDataCustom: any = {
    id: null,
    examId: '',
    categoryId: '',
    questionType: null,
    question: '',
    isActive: true,
    options: [],
    isDeleted: false
  };

  public questionDetailModel: any = {
    id: ''
  };

  constructor(public fb: FormBuilder, private route: ActivatedRoute, public router: Router, private CommonService: commonService, public http: Http, private toastr: ToastrService) {
    this.route.params.subscribe(params1 => {
      this.examID = params1['id'];
    });

    this.questionForm = this.fb.group({
      id: new FormControl(null),
      questionCategory: new FormControl(''),
      questionType: new FormControl(''),
      questionText: new FormControl(''),
      examID: new FormControl(this.examID),
      singleSelectOptionsCorrectAns: new FormControl(null),
      obj_multiSelectOptions: this.fb.array([this.fn_addSubMultipleSelectOption(null, false, null)]),
      obj_singleSelectOptions: this.fb.array([this.fn_addSubSingleSelectOption(null, false, null)]),
    });
  }

  fn_addSubMultipleSelectOption(param, flag, optionID) {
    return this.fb.group({
      multipleSelectOptionsID: optionID,
      multipleSelectOptions: param,
      multipleSelectOptionsCorrectAns: flag
    })
  }

  fn_addSubSingleSelectOption(param, flag, optionID) {
    return this.fb.group({
      singleSelectOptionsID: optionID,
      singleSelectOptions: param,
      singleSelectOptionsCorrectAns: flag
    })
  }

  ngOnInit() {
    this.questionModel =
      {
        "id": this.examID,
        "pageSize": 10,
        "pageNumber": 1,
      }
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
    this.questionModel.pageNumber = 1;
    this.questionModel.pageSize = event.target.value;
    this.fn_GetQuestionsList();
  }

  pageChanged(event: any): void {
    this.questionModel.pageNumber = parseInt(event.page);
    this.questionModel.pageSize = parseInt(event.itemsPerPage);
    this.fn_GetQuestionsList();
  }
  // Searching
  searchRecord(event: any): void { }

  // Function to get list of Exam
  fn_GetQuestionsList() {
    this.CommonService.fn_PostWithData(this.questionModel, this.questionListUrl).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.questionList = rs.data;
      }
      else {
      }
    });
  }

  fn_editQuestions(questionID) {
    this.fun_resetAll();
    this.fn_getQuestionDetails(questionID);
    this.questionForm.controls.id.setValue(questionID);
  }
  fn_getQuestionDetails(questionID) {
    this.questionDetailModel.id = questionID;
    this.CommonService.fn_PostWithData(this.questionDetailModel, this.questionDetailUrl).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.questionDetail = rs.data;
        this.fun_setEditValues();
      }
      else {
      }
    });
  }

  fun_setEditValues() {
    this.questionForm.controls.questionCategory.setValue(this.questionDetail.categoryId);
    var array = {
      0: 'SingleSelect',
      1: 'multipleSelect',
      2: 'subjective'
    };
    this.questionForm.controls.questionType.setValue(array[this.questionDetail.questionType]);
    this.questionForm.controls.questionText.setValue(this.questionDetail.question);
    this.questionForm.controls.singleSelectOptionsCorrectAns.setValue(null);
    const control_obj_singleSelectOptions = <FormArray>(
      this.questionForm.controls["obj_singleSelectOptions"]
    );
    const control_obj_multiSelectOptions = <FormArray>(
      this.questionForm.controls["obj_multiSelectOptions"]
    );
    this.questionDetail.options.forEach((item, index) => {
      if (this.questionDetail.questionType == 0) {
        this.singleSelectFlag = true;
        if (item.isCorrect) this.questionForm.controls.singleSelectOptionsCorrectAns.setValue(index.toString());
        control_obj_singleSelectOptions.push(this.fn_addSubSingleSelectOption(item.option, item.isCorrect, item.optionId));
      }
      else if (this.questionDetail.questionType == 1) {
        this.multipleSelectFlag = true;
        control_obj_multiSelectOptions.push(this.fn_addSubMultipleSelectOption(item.option, item.isCorrect, item.optionId));
      }
    });
  }

  onSubmit = function (formData) {
    if (this.questionForm.valid) {
      if (formData.value.questionType == 'SingleSelect') {
        this.fn_clear_obj_multiSelectOptions();
        this.formDataCustom.questionType = 0;
        var options = [];
        for (let key in formData.value.obj_singleSelectOptions) {
          var isCorrectVal = false;
          if (key === formData.value.singleSelectOptionsCorrectAns) isCorrectVal = true;
          options.push({ optionId: formData.value.obj_singleSelectOptions[key]['singleSelectOptionsID'], option: formData.value.obj_singleSelectOptions[key]['singleSelectOptions'], isCorrect: isCorrectVal });
        }
      }

      else if (formData.value.questionType == 'multipleSelect') {
        this.fn_clear_obj_singleSelectOptions();
        this.formDataCustom.questionType = 1;
        var options = [];
        for (let key in formData.value.obj_multiSelectOptions) {
          var isCorrectVal = false;
          if (formData.value.obj_multiSelectOptions[key]['multipleSelectOptionsCorrectAns']) isCorrectVal = true;
          options.push({ optionId: formData.value.obj_multiSelectOptions[key]['multipleSelectOptionsID'], option: formData.value.obj_multiSelectOptions[key]['multipleSelectOptions'], isCorrect: isCorrectVal });
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
      this.formDataCustom.id = this.questionForm.value.id;

      this.url = "api/Questions"; var formMsg = 'Question added successfully!';
      if (this.formDataCustom.id != null) {
        this.url = "api/Questions/UpdateQuestions";
        formMsg = 'Question Updated successfully!';
      }

      this.CommonService.fn_PostWithData(this.formDataCustom, this.url).subscribe((result: any) => {
        const rs = result;
        if (rs.statusCode == 200) {
          this.toastr.success(formMsg);
        }
        else {
          this.toastr.error('Failed to Add/Update Question');
        }
      });
    }
    else {
      return;
    }
    this.fun_resetAll();
    this.fn_GetQuestionsList();
  }

  fun_resetAll() {
    this.url = "";
    this.questionForm.controls.id.setValue(null);
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
        control.push(this.fn_addSubMultipleSelectOption(null, false, null));
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
        control.push(this.fn_addSubSingleSelectOption(null, false, null));
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
        control.push(this.fn_addSubMultipleSelectOption(null, false, null));
        control.push(this.fn_addSubMultipleSelectOption(null, false, null));
        this.multipleSelectEdit = true;
      }
    }
    if (questionTypeValue == "SingleSelect") {
      this.singleSelectFlag = true;
      if (this.singleSelectEdit === false) {
        const control = <FormArray>(
          this.questionForm.controls["obj_singleSelectOptions"]
        );
        control.push(this.fn_addSubSingleSelectOption(null, false, null));
        control.push(this.fn_addSubSingleSelectOption(null, false, null));
        this.singleSelectEdit = true;
      }
    }
  }
}
