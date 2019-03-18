import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { commonService } from 'src/app/common/services/common.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-exams',
    templateUrl: './exams.component.html',
    styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {
    userID: string;
    assignedExamList = [];
    isAttempted: boolean;
    public showResult: boolean = false;
    constructor(private router: Router, private ngxService: NgxUiLoaderService, private CommonService: commonService, private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            this.userID = JSON.parse(localStorage.getItem('userDetails')).userId;
        });
    }

    ngOnInit() {
        this.getExamDetails();
    }
    getExamDetails() {
        const listExamsByUserIdModel = {
            "id": this.userID,
            "createdBy": "5c53f2ecad3abd0eec04b0c9"
        }
        const listExamsByUserIdUrl = "api/AssignedExams/ListExamsByUserId";
        this.fn_getExamDetails(listExamsByUserIdModel, listExamsByUserIdUrl);
    }
    fn_getExamDetails(model, url) {
        this.ngxService.start();
        this.CommonService.fn_PostWithData(model, url).subscribe((result: any) => {
            const rs = result;
            if (rs.statusCode === 200) {
                this.assignedExamList = rs.data;
                this.ngxService.stop();
            }
        });
    }
    fn_showResult(examId) {
        localStorage.removeItem('examId');
        localStorage.setItem('examId', examId);
        this.router.navigate(['/viewResult']);
    }
    fn_getUserIdExamId(examId) {
        localStorage.setItem('examId', examId);
        this.router.navigate(['/instruction']);
    }
}
