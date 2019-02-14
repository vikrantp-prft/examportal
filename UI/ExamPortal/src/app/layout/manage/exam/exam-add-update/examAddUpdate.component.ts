import { Component, OnInit } from '@angular/core';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { FormGroup, FormArray, Validators, FormBuilder, FormControl } from '@angular/forms';
import { commonService } from 'src/app/common/services/common.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { appConfig } from 'src/app/common/core/app.config';

const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'exam-add-update',
  templateUrl: './examAddUpdate.html',
  providers: [commonService]
})
export class examAddUpdateComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'fileUpload' });
  public addExamForm: FormGroup;
  public url = 'api/Exams';
  public teamList = [];
  public teamUrl = 'api/Dropdown/Teams';
  constructor(public router: Router, private fb: FormBuilder, private commonService: commonService, private toastr: ToastrService) {
    this.createForm();

  }

  createForm() {
    this.addExamForm = this.fb.group({
      title: [null, [Validators.required]],
      teamId: new FormControl(''),
      description: new FormControl(''),
      examDurationHours: [null, [Validators.required]],
      examDurationMinutes: [null, [Validators.required]],
      passingMarks: [null, [Validators.required, Validators.pattern(appConfig.pattern.IVR_NUMBER)]],
      fromDate: [null, [Validators.required]],
      toDate: [null, [Validators.required]],
      isActive: new FormControl(true),
      showResultInFront: new FormControl(false),
      shuffleQuestions: new FormControl(false),
      shuffleOptions: new FormControl(false),
      isPaperPublic: new FormControl(false),
      totalQuestions: new FormControl(''),
    });
  }


  onSubmit = function (formData) {
    if (this.addExamForm.valid) {
      this.commonService.fn_PostWithData(formData, this.url).subscribe((result: any) => {
        const rs = result;
        if (rs.statusCode == 200) {
          this.toastr.success('Exam details added successfully!');
          this.router.navigate(['manage/examlist']);
        }
        else {
          this.toastr.console.error('Failed to add Exam details');
        }
      });
    }
    else {
      this.commonService.validateAllFormFields(this.addExamForm);
      this.toastr.error('Please fill required details');
      return false;
    }
  }

  // function to display the error message for  validation.
  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).touched;
  }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      alert('File uploaded successfully');
    };

    this.commonService.fn_Get(this.teamUrl).subscribe(
      (data: any) => {
        // if (data != null && data.statusCode === 200) {
        this.teamList = data.data;
      },
      err => console.error(err),
      () => { }
    );
  }
}