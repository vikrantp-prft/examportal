import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { commonService } from 'src/app/common/services/common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'team-edit-update',
    templateUrl: './teamEditUpdate.html',
})
export class EditTeamComponent implements OnInit {

    public teamID = "";
    //public teamList = [];
    public teamInfo: any;
   
    constructor(private route: ActivatedRoute,public router: Router, private CommonService: commonService, public http: Http, private toastr: ToastrService) {
        this.route.params.subscribe(params => {
            this.teamID = params['id'];
          });
    }
  
    ngOnInit(): void {
        this.fn_GetTeamById();
     }

        
     //teamForm model
        teamForm = new FormGroup({
        teamTitle: new FormControl('', Validators.required),
        teamDescription: new FormControl('', Validators.required),
        teamisActive: new FormControl('')
      });
    
      get teamTitle(){
        return this.teamForm.get('teamTitle');
      }
    
      get teamDescription(){
        return this.teamForm.get('teamDescription');
      }


      // Get team by id
        fn_GetTeamById() {
            const url = 'api/Master/GetMasterById';
            const teamModel =
            {
                "id": this.teamID,
                "pageSize": 0,
                "pageNumber": 0,
                "totleRecords": 0,
                "filter": "string",
                "sortBy": "string",
                "isDescending": true
            };

            this.CommonService.fn_PostWithData(teamModel, url).subscribe((result: any) => {
            const rs = result;
            if (rs.statusCode == 200) {
             this.teamInfo = rs.data;
             this.fn_setEditValues();
            }
            else {
            }
            }); 
        }

        

        fn_setEditValues() {
            // this.categoryForm.controls.id.setValue(this.examID);
            this.teamForm.controls.teamTitle.setValue(this.teamInfo.name);
            this.teamForm.controls.teamDescription.setValue(this.teamInfo.description);
            this.teamForm.controls.teamisActive.setValue(this.teamInfo.isActive);
        }



     fn_saveTeam(data) {
        if (this.teamForm.invalid) {
          this.teamForm.setErrors({
            Validators
          })
        }
        const url = 'api/Master/Update';
        const teamModel =
        {
            id: this.teamID,
            name: data.value.teamTitle ,
            isActive: data.value.teamisActive,
            description: data.value.teamDescription,
            masterType: "Team"
         
        }
        //console.log(teamModel);
        this.fn_saveTeamfun(url, teamModel);
      }

     
      // function for save employee details.
        fn_saveTeamfun(url, data) {
            this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
            // debugger;
            // console.log(result);
            const rs = result;
            if (rs.statusCode == 200) {
                this.toastr.success('Team edited successfully!');
                this.router.navigate(['manage/teamlist']);
            }
            else {
                this.toastr.success('Failed to edit team');
            }
        });
    }
    

}
