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
    examDetail: any;
    public examDetailUrl = "api/Exams/GetExamById";
    public questionListUrl = 'api/Questions/listQuestionsByExamId';
    questionModel: any;
    constructor(public commonService: commonService, private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            this.examID = params['examId'];
        });
    }
    ngOnInit() { }

    getExamDetails() {
        const examDetailModel = {
            "id": this.examID
        }
        this.commonService.fn_PostWithData(examDetailModel, this.examDetailUrl).subscribe((result: any) => {
            const rs = result;
            console.log(rs.data)
            if (rs.statusCode == 200) {
                this.examDetail = rs.data;
            }
        });
    }

    fn_GetQuestionsList() {
        this.questionModel.id = this.examID;
        this.commonService.fn_PostWithData(this.questionModel, this.questionListUrl).subscribe((result: any) => {
            const rs = result;
            if (rs.statusCode == 200) {

            }
        });
    }
}
