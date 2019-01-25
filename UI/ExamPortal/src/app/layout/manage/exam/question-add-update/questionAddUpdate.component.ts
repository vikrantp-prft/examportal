import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { count } from 'rxjs/operators';
import { commonService } from 'src/app/common/services/common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'question-add-update',
  templateUrl: './questionAddUpdate.html',
  providers: [commonService]

})
export class questionAddUpdateComponent implements OnInit {
  public examID = "";
  public url = 'api/addQuestion';
  public questionForm: FormGroup;

  onSubmit(model) {
    console.log(model.value);
    this.commonService.fn_PostWithData(model.value, this.url).subscribe(
      (data: any) => {
        console.log(data.data);
      },
      err => console.error(err),
      () => { }
    );
  }

  subjectiveFlag: boolean;
  singleSelectFlag: boolean;
  multipleSelectFlag: boolean;
  multipleSelectEdit: boolean;
  singleSelectEdit: boolean;

  singleSelectCount: number;
  multipleSelectCount: number;

  multipleSelectoptionArray = [];
  singleSelectoptionArray = [];

  constructor(private route: ActivatedRoute, private toastr: ToastrService, public fb: FormBuilder, private commonService: commonService) {

    this.route.params.subscribe(params => {
      this.examID = params['id'];
    });

    this.questionForm = this.fb.group({
      questionCategory: [null],
      questionType: [null],
      questionText: [null],
      examID: [null],
      singleSelectOptionsCorrectAns: [null],
      obj_multiSelectOptions: this.fb.array([this.fn_addSubMultipleSelectOption()]),
      obj_singleSelectOptions: this.fb.array([this.fn_addSubSingleSelectOption()]),
      subjectivDescription: [null]
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
    this.disbleAllFlag();
    this.singleSelectCount = 2;
    this.multipleSelectCount = 1;
    this.multipleSelectEdit = false;
    this.singleSelectEdit = false;
  }

  disbleAllFlag() {
    this.subjectiveFlag = false;
    this.singleSelectFlag = false;
    this.multipleSelectFlag = false;
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
    if (questionTypeValue == "multipleSelect") {
      this.disbleAllFlag();
      this.multipleSelectFlag = true;
      if (this.multipleSelectEdit === false) {
        const control = <FormArray>(
          this.questionForm.controls["obj_multiSelectOptions"]
        );
        control.push(this.fn_addSubMultipleSelectOption());
        this.multipleSelectEdit = true;
      }
    }
    if (questionTypeValue == "SingleSelect") {
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
    if (questionTypeValue == "subjective") {
      this.disbleAllFlag();
      this.subjectiveFlag = true;
    }

  }
}
