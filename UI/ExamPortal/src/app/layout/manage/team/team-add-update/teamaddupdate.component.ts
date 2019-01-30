import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { FormsModule, FormGroup, FormControl, Validators }   from '@angular/forms';
import { commonService } from 'src/app/common/services/common.service';

@Component({
  selector: 'team-add-update',
  templateUrl: './teamaddupdate.html',
  providers: [commonService]
})
export class AddTeamComponent implements OnInit {
  
  constructor(public router: Router, private CommonService: commonService, public http: Http, private toastr: ToastrService) {

  }


  ngOnInit() {}

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
  
  

  fn_saveTeam(data) {
    if (this.teamForm.invalid) {
      this.teamForm.setErrors({
        Validators
      })
    }
    const url = 'api/Master';
    const teamModel =
    {
      // firstName: this.employeeForm.controls.firstName.value,
      name: data.value.teamTitle ,
      isActive: true,
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
          this.toastr.success('Team added successfully!');
          this.router.navigate(['manage/teamlist']);
        }
        else {
          this.toastr.success('Failed to add team');
        }
      });
    }
}
