import { Component, OnInit } from '@angular/core';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { commonService } from 'src/app/common/services/common.service';

const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'exam-add-update',
  templateUrl: './examAddUpdate.html',
  providers: [commonService]
})
export class examAddUpdateComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'fileUpload' });
  public addQuestionForm: FormGroup;
  public url = 'api/addExam';
  constructor(private fb: FormBuilder, private commonService: commonService) {
    this.createForm();

  }

  createForm() {
    this.addQuestionForm = this.fb.group({
      addQuestionForm_team: ['', Validators.required],
      addQuestionForm_Question_Paper_Name: ['', Validators.required],
      addQuestionForm_Description: ['', Validators.required],
      addQuestionForm_Hours: ['', Validators.required],
      addQuestionForm_Minutes: ['', Validators.required],
      addQuestionForm_Passing_Marks: ['', Validators.required],
      addQuestionForm_Exam_Active_From: ['', Validators.required],
      addQuestionForm_Exam_Active_Till: ['', Validators.required],
      addQuestionForm_Is_Active: ['', Validators.required],
      addQuestionForm_Show_Result_in_Front: ['', Validators.required],
      addQuestionForm_View_Result_Permission: ['', Validators.required],
      addQuestionForm_Allow_Upload_Code: ['', Validators.required],
      addQuestionForm_Shuffle_Question: ['', Validators.required],
      addQuestionForm_Shuffle_Options: ['', Validators.required],
      addQuestionForm_Show_Categories: ['', Validators.required],
      addQuestionForm_Is_Paper_Public: ['', Validators.required]
    });
  }


  onSubmit = function (formData) {

    //console.log(formData);

    this.commonService.fn_PostWithData(formData, this.url).subscribe(
      (data: any) => {
        console.log(data.data);
      },
      err => console.error(err),
      () => { }
    );


    /*
    this.empSer.addEmployee(user);
    setTimeout(
      (): void => {
        this.router.navigate(['employee']);
      },
      100
    );
    */
  }


  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      alert('File uploaded successfully');
    };
  }
}