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
        "Name": "Which technology is used for front end development?",
        "IsAnswer": false,
        'ans': [
          {'option': 'C#', 'val': '1'},
          {'option': 'VB.net', 'val': '2'},
          {'option': 'Angular', 'val': '3'},
          {'option': 'SQL', 'val': '4'} ]
    },
    {
        "Id": 1056,
        "QuestionId": 1010,
        "Name": "Which of the following is the address of the router?",
        "IsAnswer": true,
        'ans': [
          {'option': 'The IP address', 'val': '1'},
          {'option': 'The TCP address', 'val': '2'},
          {'option': 'The subnet mask', 'val': '3'},
          {'option': 'The default gateway', 'val': '4'}
        ]
        },
        {
          "Id": 1,
          "QuestionId": 1010,
          "Name": "One way in which a structure differs from an array is that",
          "IsAnswer": false,
          'ans': [
            {'option': 'a structure may have members of more than one type', 'val': '1'},
            {'option': 'a structure must have members that are all the same type', 'val': '2'},
            {'option': 'an array may have members of more than one type', 'val': '3'},
            {'option': 'there is no difference between a structure and an array', 'val': '4'} ]
      },
      {
          "Id": 2,
          "QuestionId": 1010,
          "Name": "Arithmetic operation are coded in",
          "IsAnswer": true,
          'ans': [
            {'option': 'Decision symbols', 'val': '1'},
            {'option': 'Input/Outpur(I/0)', 'val': '2'},
            {'option': 'Processing symbols', 'val': '3'},
            {'option': 'Terminal symbols', 'val': '4'}
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
