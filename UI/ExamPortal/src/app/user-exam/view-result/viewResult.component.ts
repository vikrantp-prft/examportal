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
    public examId: string;

    constructor( private route: ActivatedRoute, private CommonService: commonService ) { 
        this.route.params.subscribe(params => {
            this.examId = params["examId"];
            this.userId = params["userId"];
          });
        
    }

    ngOnInit(): void { 
        this.fn_getIndividualResult();
    }

    fn_getIndividualResult()
    {
        const userModel = {
            "examId" : this.examId,
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
