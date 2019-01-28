import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { commonService } from 'src/app/common/services/common.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.html',
  providers: [commonService]
})
export class UploadComponent implements OnInit {
  filedata: string;
  public quizes: any;
  public quizName: string;
  public quiz: any;
  public question: any;
  public index: string;
  public count: number;
  constructor(public CommonService: commonService, public http: Http) {}

//   fn_fileChange(event) {
//     const fileList: FileList = event.target.files;
//     this.filedata = event.target.files[0].name;
//     if (fileList.length > 0) {
//       const file: File = fileList[0];
//       let formData: FormData = new FormData();
//       formData.append('uploadFile', file, file.name);
//       const apiUrl = 'api/Upload';
//       this.CommonService.fn_UploadImage(apiUrl, formData).subscribe(
//         (result: any) => {
//           const rs = result;
//         }
//       );
//     }
//   }
public x = [];
public idx: number;

ngOnInit() {
  this.idx = 0;
    this.x = [
      {
        "Id": 1055,
        "QuestionId": 1010,
        "Name": "First",
        "IsAnswer": false,
        'ans': [
          {'option': 'a', 'val': '1'},
          {'option': 's', 'val': '2'},
          {'option': 'd', 'val': '3'},
          {'option': 'f', 'val': '4'} ]
    },
    {
        "Id": 1056,
        "QuestionId": 1010,
        "Name": "Second",
        "IsAnswer": true,
        'ans': [
          {'option': '1', 'val': '1'},
          {'option': '2', 'val': '2'},
          {'option': '3', 'val': '3'},
          {'option': '4', 'val': '4'}
        ]
        },
        {
          "Id": 1,
          "QuestionId": 1010,
          "Name": "Third",
          "IsAnswer": false,
          'ans': [
            {'option': 'a', 'val': '1'},
            {'option': 'b', 'val': '2'},
            {'option': 'c', 'val': '3'},
            {'option': 'd', 'val': '4'} ]
      },
      {
          "Id": 2,
          "QuestionId": 1010,
          "Name": "Forth",
          "IsAnswer": true,
          'ans': [
            {'option': '1', 'val': '1'},
            {'option': '2', 'val': '2'},
            {'option': '3', 'val': '3'},
            {'option': '4', 'val': '4'}
          ]
          }
      ];
    this.quizes = this.x;
    this.count = this.x.length;

   this.question = this.x [0] ;
   this.idx = 0;
   // this.quizName = this.quizes[0].id;
   // this.loadQuiz(this.quizName);
  }

  // loadQuiz(quizName: string) {
  //   //   if(this.quizes[0].)
  //   // this.quizService.get(quizName).subscribe(res => {
  //     this.quiz = this.quizes[0];
  //    // this.pager.count = this.quiz.questions.length;
  //  // });
  // }
  fn_next() {
    this.idx = this.idx + 1;
    this.question = this.x [this.idx] ;
    
    // for (let i = 0 ; i < this.count; i++) {
        
    // }
    // this.x.forEach(element => {
    //   this.question = element;
    // });
  }
  fn_previous() {
    this.idx = this.idx - 1;
    this.question = this.x [this.idx] ;
    
  }
  fn_submit() {

  }

}
