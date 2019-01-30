import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { commonService } from 'src/app/common/services/common.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { appConfig } from 'src/app/common/core/app.config';

@Component({
  selector: 'employee-add-update',
  templateUrl: './employeeaddupdate.html',
  providers: [commonService]
})
export class AddEmployeeComponent implements OnInit {
  public employeeForm: FormGroup;
  public teamArray: any[];
  public stateArray: any[];
  public courseArray: any[];
  public educationArray: Array<any> = [];
  public employeeId: any;
  selectedCourse: any;
  public interestArray: Array<any> = [
    { description: 'Quality Assurance (QA)', value: 'Quality Assurance (QA)', selected: false },
    { description: 'HTML/CSS', value: 'HTML/CSS', selected: false },
    { description: 'Flash/Flex', value: 'Flash/Flex', selected: false },
    { description: 'Design', value: 'Design', selected: false }
  ];

  constructor(public router: Router, private CommonService: commonService, public http: Http,
    private formBuilder: FormBuilder, private toastr: ToastrService) {
    this.employeeForm = this.formBuilder.group({
      firstName: [null, [Validators.required, Validators.pattern(appConfig.pattern.NAME), Validators.maxLength(50)]],
      middleName: [null, [Validators.required, Validators.pattern(appConfig.pattern.NAME), Validators.maxLength(50)]],
      lastName: [null, [Validators.required, Validators.pattern(appConfig.pattern.NAME), Validators.maxLength(50)]],
      dob: new FormControl(''),
      mobile: [null, [Validators.required, Validators.pattern(appConfig.pattern.PHONE_NO), Validators.maxLength(10)]],
      address1: [null, [Validators.required, Validators.pattern(appConfig.pattern.DESCRIPTION), Validators.maxLength(10)]],
      address2: new FormControl(''),
      city: [null, [Validators.required, Validators.pattern(appConfig.pattern.CITY), Validators.maxLength(20)]],
      stateId: new FormControl(''),
      pincode: [null, [Validators.required, Validators.pattern(appConfig.pattern.PINCODE), Validators.maxLength(6)]],
      currentAddress1: [null, [Validators.required, Validators.pattern(appConfig.pattern.DESCRIPTION), Validators.maxLength(50)]],
      currentAddress2: new FormControl(''),
      currentCity: [null, [Validators.required, Validators.pattern(appConfig.pattern.CITY), Validators.maxLength(20)]],
      currentStateId: new FormControl(''),
      currentPincode: [null, [Validators.required, Validators.pattern(appConfig.pattern.PINCODE), Validators.maxLength(6)]],
      note: new FormControl(''),
      teamId: new FormControl(''),
      email: [null, [Validators.required, Validators.pattern(appConfig.pattern.EMAIL)]],
      password: [null, [Validators.required, Validators.pattern(appConfig.pattern.PASSWORD), Validators.maxLength(20)]],
      courseId: new FormControl(''),
      yearOfPassing: new FormControl(''),
      institution: new FormControl(''),
      percentage: new FormControl(''),
      interest: new FormArray([]),
      educationDetails: new FormArray([])
    });
  }

  ngOnInit() {
    this.fn_getTeam();
    this.fn_getState();
    this.fn_getCourse();
  }

  // function to display the error message for  validation.
  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).touched;
  }

  // Save Employee details function

  fn_saveEmployee(value) {
    if (this.employeeForm.valid) {
      if (this.educationArray.length === 0) {
        this.toastr.error('Please add education details');
        return false;
      }
      else if (this.employeeForm.controls.interest == null) {
        this.toastr.error('Please select atleast 1 interest');
        return false;
      }
      else {
        const saveEmployeeurl = 'api/Employee';
        value.value.EducationDetails = this.educationArray;
        this.fn_saveEmployeefun(value.value, saveEmployeeurl);
      }
    } else {
      this.CommonService.validateAllFormFields(this.employeeForm);
      this.toastr.error('Please fill required details');
      return false;
    }
  }

  // function for save employee details.
  fn_saveEmployeefun(data, url) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode === 200) {
        this.toastr.success('Employee details added successfully!');
        this.router.navigate(['user/employeelist']);
        //this.fn_resetEmployeeDetails();
      } else {
        this.toastr.error('Failed to add Employee details');
      }
    });
  }

  // function to get teams
  fn_getTeam() {
    const teamUrl = 'api/Dropdown/Teams';
    this.CommonService.fn_Get(teamUrl).subscribe((result: any) => {
      const teamResult = result;
      if (teamResult.statusCode === 200) {
        this.teamArray = teamResult.data;
      } else {
        this.teamArray = null;
      }
    });
  }

  //function to get course
  fn_getCourse() {
    const url = 'api/Dropdown/Degrees';
    this.CommonService.fn_Get(url).subscribe((result: any) => {
      const courseResult = result;
      if (courseResult.statusCode === 200) {
        this.courseArray = courseResult.data;
      } else {
        this.courseArray = null;
      }
    });
  }

  //function to get state
  fn_getState() {
    const stateUrl = 'api/Dropdown/States';
    this.CommonService.fn_Get(stateUrl).subscribe((result: any) => {
      const stateResult = result;
      if (stateResult.statusCode === 200) {
        this.stateArray = stateResult.data;
      } else {
        this.stateArray = null;
      }
    });
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

  fn_deleteCourse(index) {
    this.educationArray.splice(index, 1);
  }

  // Interest check change function
  fn_onInterestChange(event) {

    const checkedInterestArray: FormArray = this.employeeForm.get('interest') as FormArray;
    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      checkedInterestArray.push(new FormControl(event.target.value));
    }
    /* unselected */
    else {
      // find the unselected element
      let i: number = 0;
      checkedInterestArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          checkedInterestArray.removeAt(i);
          return;
        }
        i++;
      });
    }
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

}

