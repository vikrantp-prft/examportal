import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { commonService } from 'src/app/common/services/common.service';
import { ToastrService } from 'ngx-toastr';
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
      firstName: [null, [Validators.required, Validators.pattern(appConfig.pattern.DESCRIPTION), Validators.maxLength(50)]],
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
    this.employeeForm.controls.isActive.setValue(true);
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
      } else {
        const url = 'api/Employee';
        value.value.EducationDetails = this.educationArray;
        this.fn_saveEmployeefun(value.value, url);
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
        this.fn_resetEmployeeDetails();
      } else {
        this.toastr.error('Failed to add Employee details');
      }
    });
  }

  // function to get teams
  fn_getTeam() {
    const url = 'api/Dropdown/Teams';
    this.CommonService.fn_Get(url).subscribe((result: any) => {
      const teamResult = result;
      if (teamResult.statusCode === 200) {
        this.teamArray = teamResult.data;
      } else {
        this.teamArray = null;
      }
    });
  }

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

  fn_getState() {
    const url = 'api/Dropdown/States';
    this.CommonService.fn_Get(url).subscribe((result: any) => {
      const stateResult = result;
      if (stateResult.statusCode === 200) {
        this.stateArray = stateResult.data;
      } else {
        this.stateArray = null;
      }
    });
  }

  fn_addNewCourse() {
    let newCourseModel = {
      courseId: this.employeeForm.controls.course.value,
      course: this.selectedCourse,
      yearOfPassing: this.employeeForm.controls.yearOfPassing.value,
      institution: this.employeeForm.controls.institution.value,
      percentage: this.employeeForm.controls.percentage.value
    }
    this.educationArray.forEach(element => {
      if (element.courseId === newCourseModel.courseId) {
        this.toastr.error('Course is already added');
        return false;
      }
    });
    this.educationArray.push(newCourseModel);
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
    this.employeeForm.controls.phone.reset();
    this.employeeForm.controls.mobile.reset();
    this.employeeForm.controls.currentAddress1.reset();
    this.employeeForm.controls.currentAddress2.reset();
    this.employeeForm.controls.currentCity.reset();
    this.employeeForm.controls.currentStateId.setValue(null);
    this.employeeForm.controls.currentPincode.reset();
    this.employeeForm.controls.isActive.reset();
    this.employeeForm.controls.email.reset();
    this.employeeForm.controls.password.reset();
    this.employeeForm.controls.note.reset();
    this.educationArray=[];
    this.employeeForm.controls.isActive.setValue(false);
    this.interestArray.forEach(element => {
      element.selected = false;
    });
    this.fn_resetEducationDetails();
  }

  fn_resetEducationDetails() {
    this.employeeForm.controls.course.reset();
    this.employeeForm.controls.yearOfPassing.reset();
    this.employeeForm.controls.percentage.reset();
    this.employeeForm.controls.institution.reset();
  }


}

