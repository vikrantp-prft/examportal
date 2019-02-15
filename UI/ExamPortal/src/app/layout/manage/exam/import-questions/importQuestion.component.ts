import { Component, OnInit } from '@angular/core';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { commonService } from 'src/app/common/services/common.service';
const URL = 'http://localhost:3000/api/upload';


@Component({
  selector: 'import-question',
  templateUrl: './importQuestion.html'
})

export class importQuestionComponent implements OnInit {

  filedata: string;
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'fileUpload' });
  constructor(public CommonService: commonService) {

  }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      alert('File uploaded successfully');
    };
  }

  fn_fileChange(event) {
    const fileList: FileList = event.target.files;
    this.filedata = event.target.files[0].name;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData = new FormData();
      formData.append('uploadFile', file, file.name);
      const apiUrl = 'api/Questions/ImportCsv';
      this.CommonService.fn_UploadImage(apiUrl, formData).subscribe(
        (result: any) => {
          const rs = result;
        }
      );
    }
  }

}

