import { Component, OnInit } from '@angular/core';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { FormGroup, FormArray, Validators, FormBuilder, FormControl } from '@angular/forms';
import { commonService } from 'src/app/common/services/common.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

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
  public examDetailUrl = "api/Exams/GetExamById";
  public examID = "";
  public examDetail: any;

  constructor(private route: ActivatedRoute, public router: Router, private fb: FormBuilder, private commonService: commonService, private toastr: ToastrService) {
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
    this.commonService.fn_PostWithData(examDetailModel, this.examDetailUrl).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.examDetail = rs.data;
        console.log(this.examDetail);
        this.fn_setEditValues()
      }
      else {
      }
    });
  }

  createForm() {
    this.editExamForm = this.fb.group({
      id: new FormControl(''),
      title: new FormControl(''),
      teamId: new FormControl(''),
      description: new FormControl(''),
      examDurationHours: new FormControl(0),
      examDurationMinutes: new FormControl(0),
      passingMarks: new FormControl(0),
      fromDate: new FormControl(''),
      toDate: new FormControl(''),
      isActive: new FormControl(true),
      showResultInFront: new FormControl(false),
      shuffleQuestions: new FormControl(false),
      shuffleOptions: new FormControl(false),
      isPaperPublic: new FormControl(false),
      totalQuestions: new FormControl(0)
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
    this.editExamForm.controls.fromDate.setValue('2018-01-12');
    this.editExamForm.controls.toDate.setValue(this.examDetail.toDate);
    this.editExamForm.controls.isActive.setValue(this.examDetail.isActive);
    this.editExamForm.controls.showResultInFront.setValue(this.examDetail.showResultInFront);
    this.editExamForm.controls.shuffleQuestions.setValue(this.examDetail.shuffleQuestions);
    this.editExamForm.controls.shuffleOptions.setValue(this.examDetail.shuffleOptions);
    this.editExamForm.controls.isPaperPublic.setValue(this.examDetail.isPaperPublic);
    this.editExamForm.controls.totalQuestions.setValue(this.examDetail.totalQuestions);
  }

  onSubmit = function (formData) {
    console.log(formData);
    if (this.editExamForm.valid) {
      this.commonService.fn_PostWithData(formData, this.url).subscribe((result: any) => {
        const rs = result;
        if (rs.statusCode == 200) {
          this.toastr.success('Exam details Updated successfully!');
          //this.router.navigate(['manage/examlist']);
        }
        else {
          this.toastr.console.error('Failed to Update Exam details');
        }
      });
    }
    else {
      return;
    }
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