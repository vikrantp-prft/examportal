import { Component, OnInit } from '@angular/core';
import { commonService } from 'src/app/common/services/common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'view-result',
    templateUrl: './viewResult.html',
    providers: [commonService]
})
export class ViewResultComponent implements OnInit {

    public userId: string;
    public resultData: any[] = [];

    constructor( private route: ActivatedRoute, private CommonService: commonService ) { 
        this.route.params.subscribe(params => {
            this.userId = params["userId"];
          });
    }

    ngOnInit(): void { 
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
            //console.log(this.resultData);
            },
            err => console.error(err),
            () => {}
          );
    }
    
}
