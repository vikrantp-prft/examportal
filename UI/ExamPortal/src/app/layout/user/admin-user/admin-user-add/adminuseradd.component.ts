import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { commonService } from 'src/app/common/services/common.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { appConfig } from 'src/app/common/core/app.config';
import { $ } from 'protractor';

@Component({
  selector: 'adminuser-add-update',
  templateUrl: './adminuseradd.html'
})

export class AddAdminUserComponent implements OnInit {
  public adminForm: FormGroup;
  mobnumPattern = "^[7-9]{1}[0-9]{9}$";
  emailPattern = "^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$"

  public groupArray: any[];
  public teamArray: any[];
  public designationArray: any[];
  public stateArray: any[];

  constructor(public router: Router, private CommonService: commonService, public http: Http,
    private formBuilder: FormBuilder, private toastr: ToastrService) {
      this.adminForm = this.formBuilder.group({
      groupId: [null, [Validators.required]],
      teamId: [null, [Validators.required]],
      designationId: [null, [Validators.required]],
      firstName: [null, [Validators.required, Validators.pattern(appConfig.pattern.NAME), Validators.maxLength(50)]],
      lastName: [null, [Validators.required, Validators.pattern(appConfig.pattern.NAME), Validators.maxLength(50)]],
      dateOfBirth: new FormControl(''),
      address1: [null, [Validators.required, Validators.pattern(appConfig.pattern.DESCRIPTION), Validators.maxLength(100)]],
      address2: new FormControl(''),
      city: [null, [Validators.required, Validators.pattern(appConfig.pattern.CITY), Validators.maxLength(30)]],
      stateId: [null, [Validators.required]],
      pincode: [null, [Validators.required, Validators.pattern(appConfig.pattern.PINCODE), Validators.maxLength(6)]],
      mobile: [null, [Validators.required, Validators.pattern(appConfig.pattern.PHONE_NO), Validators.maxLength(10)]],
      note: new FormControl(''),
      email: [null, [Validators.required, Validators.pattern(appConfig.pattern.EMAIL)]],
      password: [null, [Validators.required, Validators.pattern(appConfig.pattern.PASSWORD), Validators.maxLength(20)]]
    });
  }

  ngOnInit() {
    this.fn_getGroup();
    this.fn_getTeam();
    this.fn_getDesignation();
    this.fn_getState();
    this.adminForm.controls.groupId.setValue("");
    this.adminForm.controls.teamId.setValue("");
    this.adminForm.controls.stateId.setValue("");
    this.adminForm.controls.designationId.setValue("");
  }

  // function to display the error message for  validation.
  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).touched;
  }
  //function to save admin user details
  fn_saveAdminUser(value) {
    if (this.adminForm.valid) {
      const url = 'api/User';
      this.fn_saveUserfun(url, value.value);
    }
    else {
      this.CommonService.validateAllFormFields(this.adminForm);
      this.toastr.error('Please fill required details');
      return false;
    }
  }

  //function to save user details.
  fn_saveUserfun(url, data) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.toastr.success('User details added successfully!');
        this.router.navigate(['user/adminuserlist']);
      }
      else {
        this.toastr.error('Failed to add User details');
      }
    });
  }

  //function to get group list
  fn_getGroup() {
    const url = 'api/Dropdown/Groups';
    this.CommonService.fn_Get(url).subscribe((result: any) => {
      const teamResult = result;
      if (teamResult.statusCode == 200) {
        this.groupArray = teamResult.data;
      }
      else {
        this.groupArray = null;
      }
    });
  }

  fn_getTeam() {
    const url = 'api/Dropdown/Teams';
    this.CommonService.fn_Get(url).subscribe((result: any) => {
      const teamResult = result;
      if (teamResult.statusCode == 200) {
        this.teamArray = teamResult.data;
      }
      else {
        this.teamArray = null;
      }
    });
  }

  fn_getDesignation() {
    const url = 'api/Dropdown/Designations';
    this.CommonService.fn_Get(url).subscribe((result: any) => {
      const teamResult = result;
      if (teamResult.statusCode == 200) {
        this.designationArray = teamResult.data;
      }
      else {
        this.designationArray = null;
      }
    });
  }


  fn_getState() {
    const url = 'api/Dropdown/States';
    this.CommonService.fn_Get(url).subscribe((result: any) => {
      const teamResult = result;
      if (teamResult.statusCode == 200) {
        this.stateArray = teamResult.data;
      }
      else {
        this.stateArray = null;
      }
    });
  }


}


