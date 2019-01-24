import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder, ValidatorFn } from '@angular/forms';
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
  public teamArray: any[];
  public stateArray: any[];
  public courseArray: any[];
  public educationArray: Array<any> = [];
  selectedCourse: any;
  public interestArray: Array<any> = [
    { description: 'Quality Assurance (QA)', value: 'Quality Assurance (QA)' },
    { description: "HTML/CSS", value: 'HTML/CSS' },
    { description: "Flash/Flex", value: 'Flash/Flex' },
    { description: "Design", value: 'Design' }
  ];

  constructor(public router: Router, private CommonService: commonService, public http: Http, private formBuilder: FormBuilder) {
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
  }

  ngOnInit() {
    this.fn_getTeam();
    this.fn_getState();
    this.fn_getCourse();
  }

  //Save Employee details function
  fn_saveEmployee(value) {
    debugger;
    if (this.employeeForm.valid) {
      const url = 'api/Employee';
      value.value.EducationDetails = this.educationArray;
      this.fn_saveEmployeefun(value.value, url);
    }
    else {
      return;
    }
  }


  // function for save employee details.
  fn_saveEmployeefun(data, url) {
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

  // function to get teams
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

  fn_getCourse() {
    debugger;
    const url = 'api/Dropdown/Degrees';
    this.CommonService.fn_Get(url).subscribe((result: any) => {
      const courseResult = result;
      if (courseResult.statusCode == 200) {
        this.courseArray = courseResult.data;
      }
      else {
        this.courseArray = null;
      }
    });
  }

  fn_getState() {
    const url = 'api/Dropdown/States';
    this.CommonService.fn_Get(url).subscribe((result: any) => {
      const stateResult = result;
      if (stateResult.statusCode == 200) {
        this.stateArray = stateResult.data;
      }
      else {
        this.stateArray = null;
      }
    });
  }

  fn_addNewCourse() {
    debugger;
    let newCourseModel = {
      courseId: this.employeeForm.controls.course.value,
      course: this.selectedCourse,
      yearOfPassing: this.employeeForm.controls.yearOfPassing.value,
      institution: this.employeeForm.controls.institution.value,
      percentage: this.employeeForm.controls.percentage.value
    }
    this.educationArray.push(newCourseModel);
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

  //Interest check change function
  onInterestChange(event) {
    debugger;
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

}

