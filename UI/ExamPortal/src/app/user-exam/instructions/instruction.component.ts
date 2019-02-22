import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { commonService } from 'src/app/common/services/common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-instruction',
    templateUrl: './instruction.component.html',
    styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {
    userID: any;
    examDetail: any;
    examName: string;
    examDurationHours: number;
    examDurationMinutes: number;
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
            // const rs = result;
            // if (rs.statusCode === 200) {
            //     this.examDetail = rs.data;
            //     console.log(this.examDetail);
            //     this.examName = rs.data.title;
            //     this.examDurationHours = rs.data.examDurationHours;
            //     this.examDurationMinutes = rs.data.examDurationMinutes;
            //     this.ngxService.stop();
            // }
        });
    }
}
