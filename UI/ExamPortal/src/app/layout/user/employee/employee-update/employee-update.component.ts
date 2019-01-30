import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { commonService } from 'src/app/common/services/common.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { appConfig } from 'src/app/common/core/app.config';

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
  public fetchInterest: any[];
  public isActiveProperty: any;
  public checkedInterestArray: FormArray;
  public isChecked: any;
  public interestArray: Array<any> = [
    { description: 'Quality Assurance (QA)', value: 'Quality Assurance (QA)', selected: false },
    { description: "HTML/CSS", value: 'HTML/CSS', selected: false },
    { description: "Flash/Flex", value: 'Flash/Flex', selected: false },
    { description: "Design", value: 'Design', selected: false }
  ];

  constructor(public router: Router, private CommonService: commonService, private formBuilder: FormBuilder, private route: ActivatedRoute, private toastr: ToastrService) {
    this.employeeForm = this.formBuilder.group({
      firstName: [null, [Validators.required, Validators.pattern(appConfig.pattern.NAME), Validators.maxLength(50)]],
      middleName: [null, [Validators.required, Validators.pattern(appConfig.pattern.NAME), Validators.maxLength(50)]],
      lastName: [null, [Validators.required, Validators.pattern(appConfig.pattern.NAME), Validators.maxLength(50)]],
      dob: new FormControl(''),
      //phone: [null, [Validators.required, Validators.pattern(appConfig.pattern.PHONE_NO), Validators.maxLength(20)]],
      mobile: [null, [Validators.required, Validators.pattern(appConfig.pattern.PHONE_NO), Validators.maxLength(20)]],
      address1: [null, [Validators.required, Validators.pattern(appConfig.pattern.DESCRIPTION), Validators.maxLength(50)]],
      address2: new FormControl(''),
      city: [null, [Validators.required, Validators.pattern(appConfig.pattern.CITY), Validators.maxLength(50)]],
      stateId: new FormControl('', Validators.required),
      pincode: [null, [Validators.required, Validators.pattern(appConfig.pattern.PINCODE), Validators.maxLength(6)]],
      currentAddress1: [null, [Validators.required, Validators.pattern(appConfig.pattern.DESCRIPTION), Validators.maxLength(50)]],
      currentAddress2: new FormControl(''),
      currentCity: [null, [Validators.required, Validators.pattern(appConfig.pattern.CITY), Validators.maxLength(20)]],
      currentStateId: new FormControl(''),
      currentPincode: [null, [Validators.required, Validators.pattern(appConfig.pattern.PINCODE), Validators.maxLength(6)]],
      note: new FormControl(''),
      teamId: new FormControl('', Validators.required),
      email: [null, [Validators.required, Validators.pattern(appConfig.pattern.EMAIL)]],
      password: [null, [Validators.required, Validators.pattern(appConfig.pattern.PASSWORD)]],
      courseId: new FormControl(''),
      yearOfPassing: new FormControl(''),
      institution: new FormControl(''),
      percentage: new FormControl(''),
      interest: new FormArray([]),
      educationDetails: new FormArray([])
    });
    this.route.params.subscribe(params => {
      this.employeeId = params['_empid'];
    });
  }

  ngOnInit() {
    this.fn_getTeam();
    this.fn_getState();
    this.fn_getCourse();
    this.fn_getEmployeeDetailsById();
  }

  // function to display the error message for  validation.
  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).touched;
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
    this.CommonService.fn_Get(degreeUrl).subscribe((result: any) => {
      const courseResult = result;
      if (courseResult.statusCode == 200) {
        this.courseArray = courseResult.data;
      }
      else {
        this.courseArray = null;
      }
    });
  }

  //get employee details by employee Id
  fn_getEmployeeDetailsById() {
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
          this.employeeForm.controls.mobile.setValue(employeeResult.data.mobile);
          this.employeeForm.controls.note.setValue(employeeResult.data.note);
          this.employeeForm.controls.city.setValue(employeeResult.data.city);
          this.employeeForm.controls.pincode.setValue(employeeResult.data.pincode);
          var dates = new Date(employeeResult.data.dob);
          var date = dates.getFullYear() + "-" + "03" + "-" + dates.getDate();
          this.employeeForm.controls.dob.setValue('1991-03-01');
          this.educationArray = employeeResult.data.educationDetails;
          this.fetchInterest = employeeResult.data.interest;
          this.checkedInterestArray = this.employeeForm.get('interest') as FormArray;
          this.interestArray.forEach(allInterest => {
            this.fetchInterest.forEach(selectedInterest => {
              if (allInterest.description == selectedInterest) {
                allInterest.selected = true;
                this.checkedInterestArray.push(new FormControl(allInterest.description));
              }
            });
          });
        }
      }
    });
  }

  //Update Employee details function
  fn_updateEmployee(value) {
      if (this.employeeForm.valid) {
      if (this.educationArray.length == 0) {
        this.toastr.error('Please add education details');
        return false;
      }
      else {
        const updateEmployeeurl = 'api/Employee/updateEmployee';
        const employeeModel = value.value;
        employeeModel.id = this.employeeId;
        employeeModel.EducationDetails = this.educationArray;
        this.fn_updateEmployeefun(employeeModel, updateEmployeeurl);
      }
    }
    else {
      this.CommonService.validateAllFormFields(this.employeeForm);
      this.toastr.error('Please fill required details');
      return false;
    }
  }

  // function for update employee details.
  fn_updateEmployeefun(data, url) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.toastr.success('Employee details updated successfully!');
        this.router.navigate(['user/employeelist']);
      }
      else {
        this.toastr.error('Failed to update Employee details');
      }
    });
  }

  fn_resetEmployeeDetails() {
    this.employeeForm.controls.teamId.setValue(null);
    this.employeeForm.controls.firstName.reset();
    this.employeeForm.controls.middleName.reset();
    this.employeeForm.controls.lastName.reset();
    this.employeeForm.controls.dob.reset();
    this.employeeForm.controls.address1.reset();
    this.employeeForm.controls.address2.reset();
    this.employeeForm.controls.city.reset();
    this.employeeForm.controls.pincode.reset();
    this.employeeForm.controls.stateId.setValue(null);
    this.employeeForm.controls.mobile.reset();
    this.employeeForm.controls.currentAddress1.reset();
    this.employeeForm.controls.currentAddress2.reset();
    this.employeeForm.controls.currentCity.reset();
    this.employeeForm.controls.currentStateId.setValue(null);
    this.employeeForm.controls.currentPincode.reset();
    this.employeeForm.controls.email.reset();
    this.employeeForm.controls.password.reset();
    this.employeeForm.controls.note.reset();
    this.educationArray = [];
    this.interestArray.forEach(element => {
      element.selected = false;
    });
    this.fn_resetEducationDetails();
  }

  fn_resetEducationDetails() {
    this.employeeForm.controls.courseId.reset();
    this.employeeForm.controls.yearOfPassing.reset();
    this.employeeForm.controls.percentage.reset();
    this.employeeForm.controls.institution.reset();
  }

  fn_deleteCourse(index) {
    this.educationArray.splice(index, 1);
  }

  //Interest check change function
  fn_onInterestChange(event) {
    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      this.checkedInterestArray.push(new FormControl(event.target.value));
    }
    /* unselected */
    else {
      // find the unselected element
      let i: number = 0;
      this.checkedInterestArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          this.checkedInterestArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  //function to add new course
  fn_addNewCourse() {
    let newCourseModel = {
      courseId: this.employeeForm.controls.courseId.value,
      course: this.selectedCourse,
      yearOfPassing: this.employeeForm.controls.yearOfPassing.value,
      institution: this.employeeForm.controls.institution.value,
      percentage: this.employeeForm.controls.percentage.value
    }

    if (this.educationArray.length != 0) {
      this.educationArray.forEach(element => {
        if (element.courseId == newCourseModel.courseId) {
          this.toastr.error('Course is already added');
          return false;
        }
        else {
          this.educationArray.push(newCourseModel);
        }
      });
    }
    else {
      this.educationArray.push(newCourseModel);
    }

    this.fn_resetEducationDetails();
  }

  //Get selected course value and text
  fn_getSelectedCourse(event: Event) {
    let selectedOptions = event.target['options'];
    let selectedIndex = selectedOptions.selectedIndex;
    let selectElementText = selectedOptions[selectedIndex].text;
    this.selectedCourse = selectElementText;
  }
}
