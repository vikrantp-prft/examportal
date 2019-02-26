import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { commonService } from 'src/app/common/services/common.service';


@Component({
    selector: 'app-exam',
    templateUrl: './exam.component.html',
    styleUrls: ['./exam.component.css'],
    providers: [commonService]
})
export class ExamComponent implements OnInit {
    public examID: string;
    public examDetail: any;

    public examName: string;
    public question = [];
    public questionCategory = [];
    public totalQuestion: number;
    public currentQuestion: string;
    public currentQuestionIndex: number = 1;
    public currentQuestionQuestionType: number;
    public currentQuestionOptionType = [];
    public examDurationHours: number;
    public examDurationMinutes: number;
    public counter: number;
    public examType: number = 0 ;
    hours: number;
    minute: number;
    second: number;
    totalMinute: number;
    totalSecond: number;

    constructor(private ngxService: NgxUiLoaderService, private CommonService: commonService, private route: ActivatedRoute) {
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
    fn_getExamDetails(model, url) {
        this.ngxService.start();
        this.CommonService.fn_PostWithData(model, url).subscribe((result: any) => {
            const rs = result;
            if (rs.statusCode === 200) {
                this.examDetail = rs.data;
                console.log(this.examDetail);
                this.examName = rs.data.title;
                this.examDurationHours = rs.data.examDurationHours;
                this.examDurationMinutes = rs.data.examDurationMinutes;
                this.totalMinute = (this.examDurationHours * 60) + this.examDurationMinutes ;
                this.totalSecond = this.totalMinute * 60 ;
                this.startCountdown(this.totalSecond);
                this.ngxService.stop();
            }
        });
    }
    getQuestionList() {
        const url = 'api/Questions/listQuestionsByExamId';
        const questionModel = {
            "id": this.examID,
            "pageSize": 200
        };
        this.fn_getQuestionList(questionModel, url);
    }
    fn_getQuestionList(model, url) {
        this.ngxService.start();
        this.CommonService.fn_PostWithData(model, url).subscribe((result: any) => {
            const rs = result;
            if (rs.statusCode == 200) {
                this.question = rs.data;
                console.log(this.question)
                this.currentQuestion = this.question[0].question;
                this.currentQuestionQuestionType = this.question[0].questionType;
                this.currentQuestionOptionType = this.question[0].options;
                this.ngxService.stop();
                this.getAllQuestionCategory();
                
            }
        });
    }
    getAllQuestionCategory() {
        const distinct = (value, index, self) => {
            return self.indexOf(value) === index;
        }
        for (let i = 0; i < this.question.length; i++) {
            this.questionCategory[i] = this.question[i].category.name;
        }
        this.questionCategory = this.questionCategory.filter(distinct);
    }
    setCurrentQuestion(questionId) {
        this.currentQuestion = this.question[questionId].question;
    }
    setCurrentQuestionQuestionType(questionId) {
        this.currentQuestionQuestionType = this.question[questionId].questionType;
    }
    setCurrentQuestionOptionType(questionId) {
        this.currentQuestionOptionType = this.question[questionId].options;
    }
    setCurrentQuestionAndOption() {
        if (this.currentQuestionIndex == 0) {
            this.currentQuestionIndex = this.question.length;
        }
        if (this.currentQuestionIndex == (this.question.length + 1)) {
            this.currentQuestionIndex = 1;
        }
        if (this.currentQuestionIndex < (this.question.length + 1)) {
            this.currentQuestion = this.question[this.currentQuestionIndex - 1].question;
            this.currentQuestionQuestionType = this.question[this.currentQuestionIndex - 1].questionType;
            this.currentQuestionOptionType = this.question[this.currentQuestionIndex - 1].options;
        }
    }
    fn_previous() {
        this.currentQuestionIndex--;
        this.setCurrentQuestionAndOption();
    }
    fn_next() {
        this.currentQuestionIndex++;
        this.setCurrentQuestionAndOption();
    }
    jumpToQuestion(id) {
        this.setCurrentQuestion(id);
        this.setCurrentQuestionQuestionType(id);
        this.setCurrentQuestionOptionType(id);
        this.currentQuestionIndex = id + 1;
    }
    startCountdown(seconds) {
        this.counter = seconds;
        var interval = setInterval(() => {
            this.hours = Math.floor(this.counter / 3600);
            this.minute = Math.floor((this.counter % 3600) / 60);
            this.second = this.counter % 60;
            this.counter--;
            if (this.counter < 0) {
                // The code here will run when
                // the timer has reached zero.
                clearInterval(interval);
                window.location.href = "http://localhost:4200/thank-you";
            };
        }, 1000);
    };
}
