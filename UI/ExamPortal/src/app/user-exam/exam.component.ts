import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { commonService } from '../common/services/common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-exam',
    templateUrl: './exam.component.html',
    styleUrls: ['./exam.component.css'],
    providers: [commonService]
})
export class ExamComponent implements OnInit {
    examID: any;
    public examDetail: object;
    public examDetailUrl = "api/Exams/GetExamById";
    examName: any;
    question = [];
    questionCategory = [];
    constructor(private CommonService: commonService, private route: ActivatedRoute) {
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
        this.CommonService.fn_PostWithData(examDetailModel, this.examDetailUrl).subscribe((result: any) => {
            const rs = result;
            if (rs.statusCode === 200) {
                this.examDetail = rs.data;
                this.examName = rs.data.title;
                console.log(this.examName)
            }
        });
    }
    getQuestionList() {
        const url = 'api/Questions/listQuestionsByExamId';
        const questionModel = {
            "id": this.examID
        };
        this.CommonService.fn_PostWithData(questionModel, url).subscribe((result: any) => {
            const rs = result;
            console.log(rs.data)
            if (rs.statusCode == 200) {
                this.question = rs.data;
                console.log()
                this.getAllQuestionCategory();
            }
        });
    }
    getAllQuestionCategory(){
        console.log(this.question.length)
        const distinct = ( value, index, self) => {
            return self.indexOf(value) === index;
        }
        for(let i=0; i < this.question.length;i++){
            this.questionCategory[i] = this.question[i].category.name;
        }
        this.questionCategory = this.questionCategory.filter(distinct);
        console.log(this.questionCategory)
    }
    y
}
