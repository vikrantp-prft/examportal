import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { commonService } from 'src/app/common/services/common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-exams',
    templateUrl: './exams.component.html',
    styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {
    userID: any;
    assignedExamList: any;
    constructor(private ngxService: NgxUiLoaderService, private CommonService: commonService, private route: ActivatedRoute) {
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
            if (rs.statusCode === 200) {
                this.assignedExamList = rs.data;
                this.ngxService.stop();
                console.log(this.assignedExamList);
            }
        });
    }
    changeAttemptedStatus(){

    }
}
