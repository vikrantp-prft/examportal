import { Component, OnInit } from '@angular/core';
import { commonService } from 'src/app/common/services/common.service';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
    selector: 'detailed-result',
    templateUrl: './detailedResult.html',
    providers: [commonService]
})
export class DetailedResultComponent implements OnInit {

    public userId: string;
    public resultData: any[] = [];
    public userResultData: any;
    public percentage: string;
    public pass: boolean=false;
    public passingMarks: string;

    constructor( private ngxService: NgxUiLoaderService, private route: ActivatedRoute, private CommonService: commonService ) { 
        this.route.params.subscribe(params => {
            this.userId = params["userId"];
          });
    }

    ngOnInit(): void { 
        this.fn_getResult();
        this.fn_GetResultList();
    }

    fn_getResult()
    {
        const userModel = {
            "examId" : "5c4eb23a4732952c9c7fcfc3",
            "userId": this.userId            
        }
        this.ngxService.start();
        const url = "api/Results/getIndividualUserResult";
        this.CommonService.fn_PostWithData(userModel, url).subscribe(
            (data: any) => {
            this.resultData = data;
            this.ngxService.stop();
            },
            err => console.error(err),
            () => {}
          );
    }

    fn_GetResultList() {
        const examModel = {
          "id": "5c4eb23a4732952c9c7fcfc3"
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
    
}
