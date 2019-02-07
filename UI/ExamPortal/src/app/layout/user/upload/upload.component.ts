import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { commonService } from 'src/app/common/services/common.service';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { GroupByPipe } from 'src/app/common/pipe/customPipe.pipe';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.html',
  providers: [commonService, GroupByPipe]
})
export class UploadComponent implements OnInit {
  filedata: string;
  public quizes: any;
  public quizName: string;
  public quiz: any;
  public question: any = {
    options: []
  };
  public index: string;
  public count: number;
  public examID = "";
  public examDetail: any = { title: "" };
  public examDetailUrl = "api/Exams/GetExamById";
  public questionListUrl = 'api/Questions/listQuestionsByExamId';
  public questionList: any;
  public questionList111: any;
  public currentQueId: any;
  public currentIndex: number;
  public optionTypes: string;

  public questionModel: any = {
    "id": "",
    "pageSize": 999,
    "pageNumber": 1
  }

  constructor(public customPipe: GroupByPipe, private route: ActivatedRoute, public commonService: commonService, public http: Http) {
    this.route.params.subscribe(params => {
      this.examID = params['examId'];
    });
  }

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
          { 'option': 'C#', 'val': '1' },
          { 'option': 'VB.net', 'val': '2' },
          { 'option': 'Angular', 'val': '3' },
          { 'option': 'SQL', 'val': '4' }]
      },
      {
        "Id": 1056,
        "QuestionId": 1010,
        "Name": "Which of the following is the address of the router?",
        "IsAnswer": true,
        'ans': [
          { 'option': 'The IP address', 'val': '1' },
          { 'option': 'The TCP address', 'val': '2' },
          { 'option': 'The subnet mask', 'val': '3' },
          { 'option': 'The default gateway', 'val': '4' }
        ]
      },
      {
        "Id": 1,
        "QuestionId": 1010,
        "Name": "One way in which a structure differs from an array is that",
        "IsAnswer": false,
        'ans': [
          { 'option': 'a structure may have members of more than one type', 'val': '1' },
          { 'option': 'a structure must have members that are all the same type', 'val': '2' },
          { 'option': 'an array may have members of more than one type', 'val': '3' },
          { 'option': 'there is no difference between a structure and an array', 'val': '4' }]
      },
      {
        "Id": 2,
        "QuestionId": 1010,
        "Name": "Arithmetic operation are coded in",
        "IsAnswer": true,
        'ans': [
          { 'option': 'Decision symbols', 'val': '1' },
          { 'option': 'Input/Outpur(I/0)', 'val': '2' },
          { 'option': 'Processing symbols', 'val': '3' },
          { 'option': 'Terminal symbols', 'val': '4' }
        ]
      }
    ];
    this.quizes = this.x;
    this.count = this.x.length;

    //this.question = this.x[0];
    this.idx = 0;
    // this.quizName = this.quizes[0].id;
    // this.loadQuiz(this.quizName);



    this.getExamDetails();
    this.fn_GetQuestionsList();

  }

  getQuestion(questionId) {
    //this.question = this.questionList111[questionId][0];
    this.currentIndex = this.questionList111.findIndex(x => x.id === questionId)


    //console.log(this.currentIndex);
    this.question = this.questionList111[this.currentIndex];
    this.loadQuestionType();


  }
  fn_GetQuestionsList() {
    this.questionModel.id = this.examID;
    this.commonService.fn_PostWithData(this.questionModel, this.questionListUrl).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        //this.questionList = rs.data;
        //console.log(this.questionList);
        this.questionList = this.customPipe.transform(rs.data, 'categoryId');
        this.questionList111 = this.customPipe.customTransform112(this.questionList);
        //console.log(this.questionList111);
        this.currentQueId = this.questionList[0].value[0].id;
        //console.log(this.currentQueId);

        // var item73 = this.questionList111.filter(function(item) {
        //   //console.log(item);
        //   return item.key === '5c541a98850872367c796140';
        // })[0];
        // console.log(item73.value[0]);

        this.currentIndex = this.questionList111.findIndex(x => x.id === this.currentQueId)


        // console.log('------------');
        // console.log(this.questionList111);

        // console.log('-------%%%%%%%%%%%-----');
        // console.log(this.currentIndex);


        // console.log('------------');
        //console.log(xx['5c53eaa6ad3abd0eec04b0ac'][0]);

        //console.log(xx);
        //var myNewList = Array.from(new Set(this.questionList));

        this.question = this.questionList111[this.currentIndex];
        this.loadQuestionType();
        //console.log(myNewList);
      }
      else {
      }
    });
  }


  loadQuestionType() {
    var array = {
      0: 'radio',
      1: 'checkbox',
      2: ''
    };
    this.optionTypes = array[this.question.questionType];
  }

  getExamDetails() {
    const examDetailModel = {
      "id": this.examID
    }
    this.commonService.fn_PostWithData(examDetailModel, this.examDetailUrl).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.examDetail = rs.data;
      }
      else {
      }
    });
  }

  fn_next() {
    this.currentIndex++;
    this.question = this.questionList111[this.currentIndex];
    this.loadQuestionType();


  }
  fn_previous() {
    this.currentIndex--;
    this.question = this.questionList111[this.currentIndex];
    this.loadQuestionType();

  }
  fn_submit() {

  }

}
