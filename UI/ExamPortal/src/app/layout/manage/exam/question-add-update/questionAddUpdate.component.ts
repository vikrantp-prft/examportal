import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { count } from 'rxjs/operators';
import { commonService } from 'src/app/common/services/common.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'question-add-update',
  templateUrl: './questionAddUpdate.html',
  providers: [commonService]
})

export class questionAddUpdateComponent implements OnInit {
  public examId = "";
  public url = 'api/Questions';
  public questionForm: FormGroup;
  public categoryList = [];
  public departmentsUrl = 'api/Dropdown/Departments';

  subjectiveFlag: boolean;
  singleSelectFlag: boolean;
  multipleSelectFlag: boolean;
  multipleSelectEdit: boolean;
  singleSelectEdit: boolean;

  constructor(public router: Router, private route: ActivatedRoute, private toastr: ToastrService, public fb: FormBuilder, private commonService: commonService) {
    this.route.params.subscribe(params => {
      this.examId = params['id'];
    });
    this.questionForm = this.fb.group({
      categoryId: new FormControl(''),
      questionType: new FormControl(''),
      question: new FormControl(''),
      examId: new FormControl(this.examId),
      singleSelectOptionsCorrectAns: new FormControl(0),
      options: this.fb.array([this.fn_addSubMultipleSelectOption()]),
      obj_singleSelectOptions: this.fb.array([this.fn_addSubSingleSelectOption()]),
      subjectivDescription: new FormControl(''),
      IsActive: true,
      IsDeleted: false
    });
  }

  ngOnInit() {
    this.disbleAllFlag();
    this.multipleSelectEdit = false;
    this.singleSelectEdit = false;

    this.commonService.fn_Get(this.departmentsUrl).subscribe(
      (data: any) => {
        this.categoryList = data.data;
      },
      err => console.error(err),
      () => { }
    );
  }




  onSubmit = function (formData) {
    if (formData.value.questionType === '0') {
      formData.value.options = formData.value.obj_singleSelectOptions;
    }
    if (this.questionForm.valid) {
      this.commonService.fn_PostWithData(formData.value, this.url).subscribe((result: any) => {
        const rs = result;
        if (rs.statusCode === 200) {
          this.toastr.success('Question added successfully!');
          //this.router.navigate(['manage/questionList'], { queryParams: { id: this.examId } });
        }
        else {
          this.toastr.error('Failed to add Question');
        }
      });
    }
    else {
      return;
    }

  };






  // onSubmit(model) {
  //   console.log(model.value);
  //   this.commonService.fn_PostWithData(model.value, this.url).subscribe(
  //     (data: any) => {
  //       console.log(data.data);
  //     },
  //     err => console.error(err),
  //     () => { }
  //   );
  // }

  fn_addSubMultipleSelectOption() {
    return this.fb.group({
      option: null,
      isCorrect: false
    });
  }

  fn_addSubSingleSelectOption() {
    return this.fb.group({
      option: null,
      isCorrect: false
    });
  }

  fn_test(i) {
    for (let j = 0 ; j < this.questionForm.value.obj_singleSelectOptions.length; j++) {
      this.questionForm.value.obj_singleSelectOptions[j].isCorrect = false;
    }
    this.questionForm.value.obj_singleSelectOptions[i].isCorrect = true;
  }

  disbleAllFlag() {
    this.subjectiveFlag = false;
    this.singleSelectFlag = false;
    this.multipleSelectFlag = false;
  }

  addSubstractMultipleSelectOptions(actionType) {
    const control = <FormArray>(
      this.questionForm.controls["options"]
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
    if (questionTypeValue === '1') {
      this.disbleAllFlag();
      this.multipleSelectFlag = true;
      if (this.multipleSelectEdit === false) {
        const control = <FormArray>(
          this.questionForm.controls["options"]
        );
        control.push(this.fn_addSubMultipleSelectOption());
        this.multipleSelectEdit = true;
      }
    }
    if (questionTypeValue === '0') {
      this.disbleAllFlag();
      this.singleSelectFlag = true;
      if (this.singleSelectEdit === false) {
        const control = <FormArray>(
          this.questionForm.controls["obj_singleSelectOptions"]
        );
        control.push(this.fn_addSubSingleSelectOption());
        this.singleSelectEdit = true;
      }
    }
    if (questionTypeValue === '2' ) {
      this.disbleAllFlag();
      this.subjectiveFlag = true;
    }

  }
}
