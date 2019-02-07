import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { commonService } from 'src/app/common/services/common.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { appConfig } from 'src/app/common/core/app.config';
import { $ } from 'protractor';
import swal from 'sweetalert2';

@Component({
  selector: 'app-admin-user-update',
  templateUrl: './admin-user-update.component.html',
  styleUrls: ['./admin-user-update.component.scss']
})
export class AdminUserUpdateComponent implements OnInit {
  public adminForm: FormGroup;
  public adminId: any;
  public groupArray: any[];
  public teamArray: any[];
  public designationArray: any[];
  public stateArray: any[];
  public year: any;
  public month: any;
  public day: any;
  constructor(public router: Router, private CommonService: commonService, private formBuilder: FormBuilder, private route: ActivatedRoute, private toastr: ToastrService) {
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
    this.route.params.subscribe(params => {
      this.adminId = params['_adminid'];
    });
  }

  ngOnInit() {
    this.fn_getGroup();
    this.fn_getTeam();
    this.fn_getDesignation();
    this.fn_getState();
    this.fn_getAdminDetailsById();
  }

  // function to display the error message for  validation.
  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).touched;
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

  fn_getDate(inputDate) {
    var date = new Date(inputDate);
    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    this.day = date.getDate();
    if (this.day < 10) {
      this.day = '0' + this.day;
    }
    if (this.month < 10) {
      this.month = '0' + this.month;
    }
    return this.year + '-' + this.month + '-' + this.day;
  }

  //get adminn details by admin Id
  fn_getAdminDetailsById() {
    debugger;
    const adminUrl = 'api/User/GetUserById';
    const adminModel =
    {
      "id": this.adminId,
      "filter": "string",
      "pageSize": 0,
      "pageNumber": 0,
      "totleRecords": 0,
      "filterBy": "string",
      "sortBy": "string",
      "isDescending": true
    }

    this.CommonService.fn_PostWithData(adminModel, adminUrl).subscribe((result: any) => {
      const adminResult = result;
      if (adminResult.statusCode == 200) {
        if (adminResult.data != null) {
          //this.adminForm.controls.groupId.setValue(adminResult.data.groupId);
          //this.adminForm.controls.designationId.setValue(adminResult.data.designationId);
          this.adminForm.controls.teamId.setValue(adminResult.data.teamId);
          this.adminForm.controls.firstName.setValue(adminResult.data.firstName);
          this.adminForm.controls.lastName.setValue(adminResult.data.lastName);
          this.adminForm.controls.address1.setValue(adminResult.data.address1);
          this.adminForm.controls.address2.setValue(adminResult.data.address2);
          this.adminForm.controls.stateId.setValue(adminResult.data.stateId);
          this.adminForm.controls.email.setValue(adminResult.data.email);
          this.adminForm.controls.password.setValue(adminResult.data.password);
          this.adminForm.controls.teamId.setValue(adminResult.data.teamId);
          this.adminForm.controls.mobile.setValue(adminResult.data.mobile);
          this.adminForm.controls.note.setValue(adminResult.data.note);
          this.adminForm.controls.city.setValue(adminResult.data.city);
          this.adminForm.controls.pincode.setValue(adminResult.data.pincode);
          var date = this.fn_getDate(adminResult.data.dob);
          this.adminForm.controls.dateOfBirth.setValue(date);
        }
      }
    });
  }

  //Update admin details function
  fn_updateAdmin(value) {
    if (this.adminForm.valid) {
        const updateAdminurl = 'api/User/Update';
        const adminModel = value.value;
        adminModel.id = this.adminId;
        this.fn_updateAdminfun(adminModel, updateAdminurl);
    }
    else {
      this.CommonService.validateAllFormFields(this.adminForm);
      this.toastr.error('Please fill required details');
      return false;
    }
  }

  // function for update admin details.
  fn_updateAdminfun(data, url) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.toastr.success('Admin details updated successfully!');
        this.router.navigate(['user/adminuserlist']);
      }
      else {
        this.toastr.error('Failed to update admin details');
      }
    });
  }
}
