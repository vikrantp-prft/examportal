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
<<<<<<< HEAD
    constructor(private router: Router, private ngxService: NgxUiLoaderService, private CommonService: commonService, private route: ActivatedRoute) {
=======
    constructor(private ngxService: NgxUiLoaderService, private CommonService: commonService, private route: ActivatedRoute) {
>>>>>>> 3f385d604a3b0e6cf31cd41da273fef8400e184d
        this.route.params.subscribe(params => {
            this.userID = params['userId'];
        });
    }

    ngOnInit() { 
        this.getExamDetails();
    }
    getExamDetails() {
        const listExamsByUserIdModel = {
            "id": this.userID
        }
        const listExamsByUserIdUrl = "api/AssignedExams/ListExamsByUserId";
        this.fn_getExamDetails(listExamsByUserIdModel, listExamsByUserIdUrl);
    }
    fn_getExamDetails(model, url) {
        this.ngxService.start();
        this.CommonService.fn_PostWithData(model, url).subscribe((result: any) => {
            const rs = result;
            console.log(rs.data);
            if (rs.statusCode === 200) {
                this.assignedExamList = rs.data;
                this.ngxService.stop();
            }
        });
    }
    fn_showResult(examId) {
        alert("Exam id:" + examId + " User id:" + this.userID);
        this.router.navigate(['/viewResult',examId,this.userID]);
    }
    changeAttemptedStatus(){

    }
}
