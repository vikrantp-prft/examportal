import { Component, OnInit } from '@angular/core';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
const URL = 'http://localhost:3000/api/upload';


@Component({
  selector: 'import-question',
  templateUrl: './importQuestion.html'
})

export class importQuestionComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'fileUpload' });

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      alert('File uploaded successfully');
    };
  }

}

