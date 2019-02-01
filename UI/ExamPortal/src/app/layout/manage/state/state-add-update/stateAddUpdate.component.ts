import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { FormsModule, FormGroup, FormControl, Validators }   from '@angular/forms';
import { commonService } from 'src/app/common/services/common.service';

@Component({
  selector: 'state-add-update',
  templateUrl: './stateAddUpdate.html',
  providers: [commonService]
})
export class AddStateComponent implements OnInit {
  
  constructor(public router: Router, private CommonService: commonService, public http: Http, private toastr: ToastrService) {

  }


  ngOnInit() {}

  stateForm = new FormGroup({
    stateTitle: new FormControl('', Validators.required),
    stateDescription: new FormControl('', Validators.required),
    stateisActive: new FormControl('')
  });

  get stateTitle(){
    return this.stateForm.get('stateTitle');
  }

  get stateDescription(){
    return this.stateForm.get('stateDescription');
  }
  
  

  fn_saveState(data) {
    if (this.stateForm.invalid) {
      this.stateForm.setErrors({
        Validators
      })
    }
    const url = 'api/Master';
    const stateModel =
    {
      // firstName: this.employeeForm.controls.firstName.value,
      name: data.value.stateTitle ,
      isActive: true,
      description: data.value.stateDescription,
      masterType: "State"
     
    }
    //console.log(teamModel);

    this.fn_saveStatefun(url, stateModel);
  }

    // function for save state details.
    fn_saveStatefun(url, data) {
      this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
        const rs = result;
        if (rs.statusCode == 200) {
          this.toastr.success('State added successfully!');
          this.router.navigate(['manage/stateList']);
        }
        else {
          this.toastr.success('Failed to add state');
        }
      });
    }
}
