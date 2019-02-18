import { Component, OnInit } from '@angular/core';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { FormGroup, FormArray, Validators, FormBuilder, FormControl } from '@angular/forms';
import { commonService } from 'src/app/common/services/common.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { appConfig } from 'src/app/common/core/app.config';
import { NgxUiLoaderService } from 'ngx-ui-loader';

const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'exam-add-update',
  templateUrl: './examEditUpdate.html',
  providers: [commonService]
})
export class examEditUpdateComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'fileUpload' });
  public editExamForm: FormGroup;
  public url = 'api/Exams/Update';
  public teamList = [];
  public teamUrl = 'api/Dropdown/Teams';
  public examID = "";
  public examDetail: any;
  public year: any;
  public month: any;
  public day: any;
  constructor(
    private ngxService: NgxUiLoaderService, 
    private route: ActivatedRoute, 
    public router: Router, 
    private fb: FormBuilder, 
    private commonService: commonService, 
    private toastr: ToastrService) {
    this.route.params.subscribe(params => {
      this.examID = params['id'];
    });
    this.getExamDetails();
    this.createForm();
  }
  getExamDetails() {
    const examDetailModel = {
      "id": this.examID
    }
    const examDetailUrl = "api/Exams/GetExamById";
    this.fn_getExamDetails(examDetailModel, examDetailUrl)
  }
  fn_getExamDetails(model, url){
    this.ngxService.start();
    this.commonService.fn_PostWithData(model, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.examDetail = rs.data;
        this.fn_setEditValues()
        this.ngxService.stop();
      }
    });
  }
  createForm() {
    this.editExamForm = this.fb.group({
      id: new FormControl(''),
      title: [null, [Validators.required]],
      teamId: [null],
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
      totalQuestions: new FormControl('')
    });
  }
  fn_setEditValues() {
    this.editExamForm.controls.id.setValue(this.examID);
    this.editExamForm.controls.title.setValue(this.examDetail.title);
    this.editExamForm.controls.teamId.setValue(this.examDetail.teamId);
    this.editExamForm.controls.description.setValue(this.examDetail.description);
    this.editExamForm.controls.examDurationHours.setValue(this.examDetail.examDurationHours);
    this.editExamForm.controls.examDurationMinutes.setValue(this.examDetail.examDurationMinutes);
    this.editExamForm.controls.passingMarks.setValue(this.examDetail.passingMarks);
    this.editExamForm.controls.fromDate.setValue(this.fn_getDate(this.examDetail.fromDate));
    this.editExamForm.controls.toDate.setValue(this.fn_getDate(this.examDetail.toDate));
    this.editExamForm.controls.isActive.setValue(this.examDetail.isActive);
    this.editExamForm.controls.showResultInFront.setValue(this.examDetail.showResultInFront);
    this.editExamForm.controls.shuffleQuestions.setValue(this.examDetail.shuffleQuestions);
    this.editExamForm.controls.shuffleOptions.setValue(this.examDetail.shuffleOptions);
    this.editExamForm.controls.isPaperPublic.setValue(this.examDetail.isPaperPublic);
    this.editExamForm.controls.totalQuestions.setValue(this.examDetail.totalQuestions);
  }
  fn_getDate(inputDate) {
    var date = new Date(inputDate);
    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    this.day = date.getDate();
    if (this.day < 10) {
      this.day = '0' + this.day;
    }
    if (this.month < 10) {
      this.month = '0' + this.month;
    }
    return this.year + '-' + this.month + '-' + this.day;
  }
  onSubmit = function (formData) {
    if (this.editExamForm.valid) {
      this.commonService.fn_PostWithData(formData, this.url).subscribe((result: any) => {
        const rs = result;
        if (rs.statusCode == 200) {
          this.toastr.success('Exam details Updated successfully!');
          this.router.navigate(['manage/examlist']);
        }
        else {
          this.toastr.console.error('Failed to Update Exam details');
        }
      });
    }
    else {
      this.commonService.validateAllFormFields(this.editExamForm);
      this.toastr.error('Please fill required details');
      return false;
    }
  }
  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      alert('File uploaded successfully');
    };
    this.fn_getTeamForDropdown();
  }
  fn_getTeamForDropdown(){
    this.ngxService.start();
    this.commonService.fn_Get(this.teamUrl).subscribe(
      (data: any) => {
        this.teamList = data.data;
        this.ngxService.stop();
      },
      err => console.error(err),
      () => { }
    );
  }
  // function to display the error message for  validation.
  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).touched;
  }

}