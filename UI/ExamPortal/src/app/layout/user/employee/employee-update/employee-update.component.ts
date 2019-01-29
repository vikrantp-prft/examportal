import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { commonService } from 'src/app/common/services/common.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent implements OnInit {
  public employeeForm: FormGroup;
  public teamArray: any[];
  public stateArray: any[];
  public courseArray: any[];
  public educationArray: Array<any> = [];
  selectedCourse: any;
  public employeeId: any;
  public interestArray: Array<any> = [
    { description: 'Quality Assurance (QA)', value: 'Quality Assurance (QA)', selected: false },
    { description: "HTML/CSS", value: 'HTML/CSS', selected: false },
    { description: "Flash/Flex", value: 'Flash/Flex', selected: false },
    { description: "Design", value: 'Design', selected: false }
  ];

  constructor(public router: Router, private CommonService: commonService, private formBuilder: FormBuilder, private route: ActivatedRoute, private toastr: ToastrService) {
    this.employeeForm = this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      middleName: new FormControl(''),
      lastName: new FormControl(''),
      dob: new FormControl(''),
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
      teamId: new FormControl(''),
      isActive: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      course: new FormControl(''),
      yearOfPassing: new FormControl(''),
      institution: new FormControl(''),
      percentage: new FormControl(''),
      interest: new FormArray([]),
      educationDetails: new FormArray([])
    });
    this.route.params.subscribe(params => {
      this.employeeId = params['_empid'];
      console.log('this.employeeId', this.employeeId);
    });
  }

  ngOnInit() {
    debugger;
    this.fn_getTeam();
    this.fn_getState();
    this.fn_getCourse();
    this.fn_getEmployeeDetailsById();
  }

  // function to get teams
  fn_getTeam() {
    const teamUrl = 'api/Dropdown/Teams';
    this.CommonService.fn_Get(teamUrl).subscribe((result: any) => {
      const teamResult = result;
      if (teamResult.statusCode == 200) {
        this.teamArray = teamResult.data;
      }
      else {
        this.teamArray = null;
      }
    });
  }

  //function to get state
  fn_getState() {
    const stateUrl = 'api/Dropdown/States';
    this.CommonService.fn_Get(stateUrl).subscribe((result: any) => {
      const stateResult = result;
      if (stateResult.statusCode == 200) {
        this.stateArray = stateResult.data;
      }
      else {
        this.stateArray = null;
      }
    });
  }

  //function to get course
  fn_getCourse() {
    const degreeUrl = 'api/Dropdown/Degrees';
    // this.CommonService.fn_Get(degreeUrl).subscribe((result: any) => {
    //   const courseResult = result;
    //   if (courseResult.statusCode == 200) {
    //     this.courseArray = courseResult.data;
    //   }
    //   else {
    //     this.courseArray = null;
    //   }
    // });
  }

  //get employee details by employee Id
  fn_getEmployeeDetailsById() {
    debugger;
    const employeeUrl = 'api/Employee/GetEmployeeById';
    const employeeModel =
    {
      "id": this.employeeId,
      "filter": "string",
      "pageSize": 0,
      "pageNumber": 0,
      "totleRecords": 0,
      "filterBy": "string",
      "sortBy": "string",
      "isDescending": true
    }

    this.CommonService.fn_PostWithData(employeeModel, employeeUrl).subscribe((result: any) => {
      const employeeResult = result;
      if (employeeResult.statusCode == 200) {
        if (employeeResult.data != null) {
          this.employeeForm.controls.firstName.setValue(employeeResult.data.firstName);
          this.employeeForm.controls.middleName.setValue(employeeResult.data.middleName);
          this.employeeForm.controls.lastName.setValue(employeeResult.data.lastName);
          this.employeeForm.controls.phone.setValue(employeeResult.data.phone);
          this.employeeForm.controls.address1.setValue(employeeResult.data.address1);
          this.employeeForm.controls.address2.setValue(employeeResult.data.address2);
          this.employeeForm.controls.currentAddress1.setValue(employeeResult.data.currentAddress1);
          this.employeeForm.controls.currentAddress2.setValue(employeeResult.data.currentAddress2);
          this.employeeForm.controls.currentCity.setValue(employeeResult.data.currentCity);
          this.employeeForm.controls.currentPincode.setValue(employeeResult.data.currentPincode);
          this.employeeForm.controls.currentStateId.setValue(employeeResult.data.currentStateId);
          this.employeeForm.controls.stateId.setValue(employeeResult.data.stateId);
          this.employeeForm.controls.email.setValue(employeeResult.data.email);
          this.employeeForm.controls.password.setValue(employeeResult.data.password);
          this.employeeForm.controls.teamId.setValue(employeeResult.data.teamId);
          this.employeeForm.controls.isActive.setValue(employeeResult.data.isActive);
          this.employeeForm.controls.mobile.setValue(employeeResult.data.mobile);
          this.employeeForm.controls.note.setValue(employeeResult.data.note);
          this.employeeForm.controls.phone.setValue(employeeResult.data.phone);
          this.employeeForm.controls.city.setValue(employeeResult.data.city);
          this.employeeForm.controls.pincode.setValue(employeeResult.data.pincode);
          this.employeeForm.controls.dob.setValue(employeeResult.data.dob);
          this.educationArray = employeeResult.data.educationDetails;
        }
        else {
          this.toastr.success('Employee details deleted successfully!');
        }
      }
    });
  }
}
