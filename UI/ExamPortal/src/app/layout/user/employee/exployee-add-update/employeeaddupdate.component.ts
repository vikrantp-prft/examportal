import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { commonService } from 'src/app/common/services/common.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'employee-add-update',
  templateUrl: './employeeaddupdate.html',
  providers: [commonService]
})
export class AddEmployeeComponent implements OnInit {
  public employeeForm: FormGroup;
  toastr: any;

  constructor(public router: Router, private CommonService: commonService, public http: Http) {
    this.employeeForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      middleName: new FormControl(''),
      lastName: new FormControl(''),
      dateOfBirth: new FormControl(''),
      phone: new FormControl(''),
      mobile: new FormControl(''),
      address1: new FormControl(''),
      address2: new FormControl(''),
      city: new FormControl(''),
      stateId: new FormControl(''),
      pincode: new FormControl(''),
      currentAddress1: new FormControl(''),
      currentAddress2: new FormControl(''),
      currentCity: new FormControl(''),
      currentStateId: new FormControl(''),
      currentPincode: new FormControl(''),
      note: new FormControl(''),
      isActive: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit() {

  }

  fn_saveEmployee() {
    debugger;
    const url = 'api/Employee';
    const employeeModel =
    {
      firstName: this.employeeForm.controls.firstName.value,
      middleName: this.employeeForm.controls.middleName.value,
      lastName: this.employeeForm.controls.lastName.value,
      isActive: true,
      userName: this.employeeForm.controls.userName.value,
      password: this.employeeForm.controls.password.value,
      dob: this.employeeForm.controls.dateOfBirth.value,
      address1: this.employeeForm.controls.address1.value,
      address2: this.employeeForm.controls.address2.value,
      city: this.employeeForm.controls.city.value,
      stateId: this.employeeForm.controls.stateId.value,
      pincode: this.employeeForm.controls.pincode.value,
      currentAddress1: this.employeeForm.controls.currentAddress1.value,
      currentAddress2: this.employeeForm.controls.currentAddress2.value,
      currentCity: this.employeeForm.controls.currentCity.value,
      currentStateId: this.employeeForm.controls.currentStateId.value,
      currentPincode: this.employeeForm.controls.currentPincode.value,
      mobile: this.employeeForm.controls.mobile.value,
      team: this.employeeForm.controls.teamId.value,
      note: this.employeeForm.controls.note.value,
      interest: this.employeeForm.controls.interest.value,
      isEmployee: true,
      createdDate: this.employeeForm.controls.createdDate.value,
      modifiedDate: this.employeeForm.controls.modifiedDate.value
    }

    this.fn_saveEmployeefun(url, employeeModel);
  }


  // function for save employee details.
  fn_saveEmployeefun(url, data) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      debugger;
      const rs = result;
      if (rs.statusCode == 200) {
        this.toastr.success('Employee details added successfully!');
      }
      else {
        this.toastr.success('Failed to add Employee details');
      }
    });
  }
}

