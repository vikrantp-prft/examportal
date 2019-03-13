import { Component, OnInit } from '@angular/core';
import { commonService } from 'src/app/common/services/common.service';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

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
    public percentage: any;

    constructor( private ngxService: NgxUiLoaderService, private route: ActivatedRoute, private CommonService: commonService ) { 
        this.route.params.subscribe(params => {
            this.examId = params["examId"];
            this.userId = params["userId"];
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
            console.log(this.userResultData);
            console.log(this.userResultData[0].obtainedMarks);
            this.percentage=(((this.userResultData[0].obtainedMarks)/(this.userResultData[0].totalMarks)*100).toFixed(2));
            console.log(this.percentage);
            this.ngxService.stop();
            //this.userModel.totalRecords = data.totalRecords;
          },
          err => console.error(err),
          () => {}
        );
      }

      
    
}
