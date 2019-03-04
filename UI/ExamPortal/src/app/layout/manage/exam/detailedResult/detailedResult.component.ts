import { Component, OnInit } from '@angular/core';
import { commonService } from 'src/app/common/services/common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'detailed-result',
    templateUrl: './detailedResult.html',
    providers: [commonService]
})
export class DetailedResultComponent implements OnInit {

    public userId: string;
    public resultData?: any[] = [];

    constructor( private route: ActivatedRoute, private CommonService: commonService ) { 
        this.route.params.subscribe(params => {
            this.userId = params["userId"];
          });
    }

    ngOnInit(): void { 
        console.log(this.userId);
        this.fn_getResult();
    }

    fn_getResult()
    {
        const userModel = {
            "examId" : "5c4eb23a4732952c9c7fcfc3",
            "userId": this.userId            
        }
        const url = "api/Results/getIndividualUserResult";
        this.CommonService.fn_PostWithData(userModel, url).subscribe(
            (data: any) => {
            this.resultData = data;
            console.log(this.resultData);
            },
            err => console.error(err),
            () => {}
          );
    }

    // fn_GetResultList() {
    //     this.ngxService.start();
    //     const url = "api/Results/listResultsByExamId"; 
    //     this.CommonService.fn_PostWithData(this.userModel, url).subscribe(
    //       (data: any) => {
    //         this.userList = data.data;
    //         this.ngxService.stop();
    //         this.userModel.totalRecords = data.totalRecords;
    //       },
    //       err => console.error(err),
    //       () => {}
    //     );
    //   }
    
}
