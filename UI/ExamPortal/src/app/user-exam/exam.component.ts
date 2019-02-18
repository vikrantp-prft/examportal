import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { commonService } from '../common/services/common.service';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
    selector: 'app-exam',
    templateUrl: './exam.component.html',
    styleUrls: ['./exam.component.css'],
    providers: [commonService]
})
export class ExamComponent implements OnInit {
    examID: any;
    public examDetail: object;
    
    examName: any;
    question = [];
    questionCategory = [];
    totalQuestion: number;
    currentQuestion: any;
    currentQuestionIndex: number = 1;
    currentQuestionQuestionType: number; 
    currentQuestionOptionType = [];
 
    constructor(private ngxService: NgxUiLoaderService,private CommonService: commonService, private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            this.examID = params['examId'];
        });
    }
    ngOnInit() {
        this.getExamDetails();
        this.getQuestionList();
    }
    getExamDetails() {
        const examDetailModel = {
            "id": this.examID
        }
        const examDetailUrl = "api/Exams/GetExamById";
        this.fn_getExamDetails(examDetailModel, examDetailUrl);
    }
    fn_getExamDetails(model, url){
        this.ngxService.start();
        this.CommonService.fn_PostWithData(model, url).subscribe((result: any) => {
            const rs = result;
            if (rs.statusCode === 200) {
                this.examDetail = rs.data;
                this.examName = rs.data.title;
                this.ngxService.stop();
            }
        });
    }
    getQuestionList() {
        const url = 'api/Questions/listQuestionsByExamId';
        const questionModel = {
            "id": this.examID
        };
        this.fn_getQuestionList(questionModel,url);
    }
    fn_getQuestionList(model,url){
        this.ngxService.start();
        this.CommonService.fn_PostWithData(model, url).subscribe((result: any) => {
            const rs = result;
            if (rs.statusCode == 200) {
                this.question = rs.data;
                this.currentQuestion = this.question[0].question;
                this.currentQuestionQuestionType = this.question[0].questionType;
                this.currentQuestionOptionType = this.question[0].options;
                this.getAllQuestionCategory();
                this.ngxService.stop();
            }
        });
    }
    getAllQuestionCategory(){
        const distinct = ( value, index, self) => {
            return self.indexOf(value) === index;
        }
        for(let i=0; i < this.question.length;i++){
            this.questionCategory[i] = this.question[i].category.name;
        }
        this.questionCategory = this.questionCategory.filter(distinct);
    }
    setCurrentQuestion(questionId){
        this.currentQuestion = this.question[questionId].question;
    }
    setCurrentQuestionQuestionType(questionId){
        this.currentQuestionQuestionType = this.question[questionId].questionType;
    }
    setCurrentQuestionOptionType(questionId){
        this.currentQuestionOptionType = this.question[questionId].options;
    }
    setCurrentQuestionAndOption(){
        if (this.currentQuestionIndex == 0) {
            this.currentQuestionIndex = this.question.length;
        }
        if(this.currentQuestionIndex == (this.question.length + 1))
        {
            this.currentQuestionIndex = 1;
        }
        if(this.currentQuestionIndex < (this.question.length + 1)){
            this.currentQuestion = this.question[this.currentQuestionIndex - 1].question;
            this.currentQuestionQuestionType = this.question[this.currentQuestionIndex -1].questionType;
            this.currentQuestionOptionType = this.question[this.currentQuestionIndex - 1].options;
        }
    }
    fn_previous(){
        this.currentQuestionIndex--;
        this.setCurrentQuestionAndOption();
    }
    fn_next(){
        this.currentQuestionIndex++;
        this.setCurrentQuestionAndOption();
    }
    jumpToQuestion(id){
        this.setCurrentQuestion(id);
        this.setCurrentQuestionQuestionType(id);
        this.setCurrentQuestionOptionType(id);
        this.currentQuestionIndex = id + 1;        
    }
}
