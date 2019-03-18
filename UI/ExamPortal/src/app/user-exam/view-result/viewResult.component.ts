import { Component, OnInit } from '@angular/core';
import { commonService } from 'src/app/common/services/common.service';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from "@angular/router";

@Component({
    selector: 'view-result',
    templateUrl: './viewResult.html',
    providers: [commonService]
})
export class ViewResultComponent implements OnInit {

    public userId: string;
    public resultData: any[] = [];
    public examId: string;
    public userResultData: any;
    public pass: boolean;
    public percentage: any;
    public passingMarks: any;

    constructor( private ngxService: NgxUiLoaderService, 
      private route: ActivatedRoute, 
      private CommonService: commonService,
      private router :  Router ) { 
        const userDetail = JSON.parse(localStorage.getItem('userDetails'));
        const examId = localStorage.getItem('examId');
        this.route.params.subscribe(params => {
            this.examId = examId;
            this.userId = userDetail.userId;
          });
        
    }

    ngOnInit(): void { 
        this.fn_getIndividualResult();
        this.fn_GetResultList();
    }

    fn_getIndividualResult()
    {
        const userModel = {
            "examId" : this.examId,
            "userId": this.userId            
        }
        this.ngxService.start();
        const url = "api/Results/getIndividualUserResult";
        this.CommonService.fn_PostWithData(userModel, url).subscribe(
            (data: any) => {
            this.resultData = data;
            this.ngxService.stop();
            //console.log(this.resultData);
            },
            err => console.error(err),
            () => {}
          );
    }

    fn_GetResultList() {
        const examModel = {
          "id": this.examId
        }
        this.ngxService.start();
        const url = "api/Results/listResultsByExamId"; 
        this.CommonService.fn_PostWithData(examModel, url).subscribe(
          (data: any) => {
            this.userResultData = data.data;
            this.percentage=this.userResultData[0].percentage;
            this.passingMarks=this.userResultData[0].passingMarks;
            this.fn_finalresult();
            this.ngxService.stop();
            //this.userModel.totalRecords = data.totalRecords;
          },
          err => console.error(err),
          () => {}
        );
      }

    fn_finalresult() {
        if(this.percentage >= this.passingMarks){
            this.pass = true;
        }
        else{
            this.pass = false;
        }
    }

    fn_getUserIdExamId(){
      const userDetail = JSON.parse(localStorage.getItem('userDetails'));
      this.router.navigate(['/exams']);
   }
}
