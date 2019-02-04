import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { FormsModule, FormGroup, FormControl, Validators }   from '@angular/forms';
import { commonService } from 'src/app/common/services/common.service';

@Component({
  selector: 'designation-add-update',
  templateUrl: './designationAddUpdate.html',
  providers: [commonService]
})
export class AddDesignationComponent implements OnInit {
  
  constructor(public router: Router, private CommonService: commonService, public http: Http, private toastr: ToastrService) {

  }


  ngOnInit() {}

  designationForm = new FormGroup({
    designationTitle: new FormControl('', Validators.required),
    designationDescription: new FormControl('', [Validators.required])
  });

  get designationTitle(){
    return this.designationForm.get('designationTitle');
  }

  get designationDescription(){
    return this.designationForm.get('designationDescription');
  }

  frmReset()
  {
    this.designationForm.reset();
  }  
  
  fn_saveDesignation(data) {
    if (this.designationForm.invalid) {
      this.designationForm.setErrors({
        Validators
      })
    }
    const url = 'api/Master';
    const designationModel =
    {
      // firstName: this.employeeForm.controls.firstName.value,
      name: data.value.designationTitle ,
      isActive: true,
      description: data.value.designationDescription,
      masterType: "Designation"
     
    }
    console.log(designationModel);

    this.fn_saveCategoryfun(url, designationModel);
  }

  // function for save employee details.
  fn_saveCategoryfun(url, data) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      // debugger;
      // console.log(result);
      const rs = result;
      if (rs.statusCode == 200) {
        this.toastr.success('Designation  added successfully!');
        this.router.navigate(['manage/designationlist']);
      }
      else {
        this.toastr.success('Failed to add designation');
      }
    });
  }
}
