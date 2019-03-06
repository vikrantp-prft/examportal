import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { commonService } from 'src/app/common/services/common.service';
import swal from 'sweetalert2';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-exam',
    templateUrl: './exam.component.html',
    styleUrls: ['./exam.component.css'],
    providers: [commonService]
})
export class ExamComponent implements OnInit {
    public examID?: string;
    public examDetail?: object;
    public endExam: boolean = false;
    public examName?: string;
    public question?: any[] = [];
    public questionListForOption?: any[] = [];
    public questionCategory = [];
    public totalQuestion: number;
    public currentQuestion?: string;
    public currentQuestionIndex: number = 1;
    public currentQuestionQuestionType: number;
    public currentQuestionOptionType = [];
    public examDurationHours: number;
    public examDurationMinutes: number;
    public counter: number;
    public isFeedback: boolean;
    public hours: number;
    public minute: number;
    public second: number;
    public totalMinute: number;
    public totalSecond: number;
    public currentQuestionQuestionId: string;
    public optionIdArray: string[] = [];
    public currentQuestionIsAttempted: boolean;
    public currentQuestionSelectedOptions = [];
    constructor(private router: Router, private ngxService: NgxUiLoaderService, private CommonService: commonService, private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            this.examID = params['examId'];
        });
    }
    ngOnInit() {
        this.getExamDetails();
        this.getQuestionList();
        this.getQuestionListForOption();
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
                this.ngxService.stop();
                this.examName = rs.data.title;
                this.isFeedback = rs.data.isFeedback;
                this.examDurationHours = rs.data.examDurationHours;
                this.examDurationMinutes = rs.data.examDurationMinutes;
                this.totalMinute = (this.examDurationHours * 60) + this.examDurationMinutes;
                this.totalSecond = this.totalMinute * 60;
                this.startCountdown(this.totalSecond);
            }
        });
    }
    getQuestionList() {
        const url = 'api/AttemptedQuestions/GetQuestionsByAssignedExam';

        const questionModel = {
            "examId": this.examID,
            "userId": "5c53e96bad3abd0eec04b09a"
        };
        this.fn_getQuestionList(questionModel, url);
    }
    fn_getQuestionList(model, url) {
        this.ngxService.start();
        this.CommonService.fn_PostWithData(model, url).subscribe((result: any) => {
            const rs = result;
            if (rs.statusCode == 200) {
                this.question = rs.data;
                this.questionListForOption = rs.data;
                // console.log(this.questionListForOption)
                this.ngxService.stop();
                this.totalQuestion = this.question.length;
                this.currentQuestion = this.question[0].question;
                this.currentQuestionQuestionType = this.question[0].questionType;
                this.currentQuestionOptionType = this.question[0].options;
                this.currentQuestionQuestionId = this.question[0].questionId;
                this.currentQuestionSelectedOptions = this.question[0].selectedOptionId;
                this.getAllQuestionCategory();
            }
        });
    }
    getQuestionListForOption(){
        const url = 'api/AttemptedQuestions/GetQuestionsByAssignedExam';

        const questionModel = {
            "examId": this.examID,
            "userId": "5c53e96bad3abd0eec04b09a"
        };
        this.fn_getQuestionListForOption(url, questionModel);
    }
    fn_getQuestionListForOption(url, modal){
        this.ngxService.start();
        this.CommonService.fn_PostWithData(modal, url).subscribe((result: any) => {
            const rs = result;
            if (rs.statusCode == 200) {
                this.questionListForOption = rs.data;
                // console.log(this.questionListForOption);
                this.ngxService.stop();
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
        if (this.currentQuestionIndex < (this.question.length + 1)) {
            this.currentQuestion = this.question[this.currentQuestionIndex - 1].question;
            this.currentQuestionQuestionType = this.question[this.currentQuestionIndex - 1].questionType;
            this.currentQuestionOptionType = this.question[this.currentQuestionIndex - 1].options;
            this.currentQuestionSelectedOptions = this.question[this.currentQuestionIndex - 1].selectedOptionId;
        }
    }
    setCurrentQuestionQuestionId(myId) {
        this.currentQuestionQuestionId = this.question[myId].questionId;
    }
    setCurrentQuestionSelectedOptions(){
       
    }
    fn_previous() {
        this.currentQuestionIndex--;
        this.setCurrentQuestionAndOption();
    }
    fn_next() {
        this.setCurrentQuestionQuestionId(this.currentQuestionIndex - 1);
        this.currentQuestionIndex++;
        this.setCurrentQuestionAndOption();
        if (this.optionIdArray.length != 0) {
            this.SaveAttemptedQuestionsById();
        }
    }
    jumpToQuestion(id) {
        this.setCurrentQuestion(id);
        this.setCurrentQuestionQuestionType(id);
        this.setCurrentQuestionOptionType(id);
        this.currentQuestionIndex = id + 1;
    }

    SaveAttemptedQuestionsById() {
        const url = 'api/AttemptedQuestions/SaveAttemptedQuestionsById';
        const modal = {
            "QuestionsId": this.currentQuestionQuestionId,
            "selectedOptionId": this.optionIdArray,
            "userId": "5c53e96bad3abd0eec04b09a",
            "ExamId": this.examID,
            "isAttempted": true,
            "subjectiveAnswer": ""
        }
        this.fn_SaveAttemptedQuestionsById(url, modal);
    }
    fn_SaveAttemptedQuestionsById(url, modal) {
        this.ngxService.start();
        this.CommonService.fn_PostWithData(modal, url).subscribe((result: any) => {
            const rs = result;
            if (rs.statusCode == 200) {
                this.ngxService.stop();
                this.getQuestionListForOption();
                this.optionIdArray = [];
                if (this.endExam) {
                    this.saveResult();
                }
            }
        });
    }
    fn_endExam() {
        swal({
            title: 'Are you sure?',
            text: 'You want to end the exam!',
            buttonsStyling: true,
            confirmButtonClass: 'btn btn-success',
            showCancelButton: true,
            cancelButtonClass: 'btn btn-danger',
            confirmButtonText: 'Yes'
        }).then(x => {
            if (x.value == true) {
                this.endExam = true;
                if (this.optionIdArray.length != 0) {
                    this.fn_next();
                }
                else {
                    this.saveResult();
                }
            }
        });
    }
    setOptionIdArray(event: any) {
        if (event.target.type == 'checkbox') {
            if (event.target.checked == true) {
                this.optionIdArray.push(event.target.value);
            } else {
                this.optionIdArray.splice(this.optionIdArray.indexOf(event.target.value), 1)
            }
        }
        if (event.target.type == 'radio') {
            if (event.target.checked == true) {
                this.optionIdArray = [];
                this.optionIdArray.push(event.target.value);
            } else {
                this.optionIdArray.pop()
            }
        }

    }
    saveResult() {
        const url = 'api/Results/GenerateResult';
        const modal = {
            "examId": this.examID,
            "userId": "5c53e96bad3abd0eec04b09a"
        };
        this.fn_saveResult(url, modal);
    }
    fn_saveResult(url, modal) {
        this.ngxService.start();
        this.CommonService.fn_PostWithData(modal, url).subscribe((result: any) => {
            const rs = result;
            if (rs.statusCode == 200) {
                this.router.navigate(['/thank-you']);
                this.ngxService.stop();
            }
        });
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
