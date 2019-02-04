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
  public newArray = [];
  public employeeId: any;
  selectedCourse: any;
  public emailExist: boolean = false;
  public yearOfPassingArray: Array<any> = [
    { year: 1991 }, { year: 1992 }, { year: 1993 }, { year: 1994 }, { year: 1995 }, { year: 1996 }, { year: 1997 }, { year: 1998 }, { year: 1999 }, { year: 2000 },
    { year: 2001 }, { year: 2002 }, { year: 2003 }, { year: 2004 }, { year: 2005 }, { year: 2006 }, { year: 2007 }, { year: 2008 }, { year: 2009 }, { year: 2010 },
    { year: 2011 }, { year: 2012 }, { year: 2013 }, { year: 2014 }, { year: 2015 }, { year: 2016 }, { year: 2017 }, { year: 2018 }
  ]
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
      dob: [null, [Validators.required]],
      mobile: [null, [Validators.required, Validators.pattern(appConfig.pattern.PHONE_NO), Validators.maxLength(10)]],
      address1: [null, [Validators.required, Validators.pattern(appConfig.pattern.DESCRIPTION), Validators.maxLength(50)]],
      address2: new FormControl(''),
      city: [null, [Validators.required, Validators.pattern(appConfig.pattern.CITY), Validators.maxLength(20)]],
      stateId: [null, [Validators.required]],
      pincode: [null, [Validators.required, Validators.pattern(appConfig.pattern.PINCODE), Validators.maxLength(6)]],
      currentAddress1: [null, [Validators.required, Validators.pattern(appConfig.pattern.DESCRIPTION), Validators.maxLength(50)]],
      currentAddress2: new FormControl(''),
      currentCity: [null, [Validators.required, Validators.pattern(appConfig.pattern.CITY), Validators.maxLength(20)]],
      currentStateId: [null, [Validators.required]],
      currentPincode: [null, [Validators.required, Validators.pattern(appConfig.pattern.PINCODE), Validators.maxLength(6)]],
      note: new FormControl(''),
      teamId: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern(appConfig.pattern.EMAIL)]],
      password: [null, [Validators.required, Validators.pattern(appConfig.pattern.PASSWORD), Validators.maxLength(20)]],
      courseId: new FormControl(''),
      yearOfPassing: new FormControl(''),
      institution: new FormControl(''),//[null, [Validators.required, Validators.pattern(appConfig.pattern.DESCRIPTION), Validators.maxLength(30)]],
      percentage: new FormControl(''),//[null, [Validators.required, Validators.pattern(appConfig.pattern.DECIMAL)]],
      interest: new FormArray([]),
      educationDetails: new FormArray([])
    });
  }

  ngOnInit() {
    this.fn_getTeam();
    this.fn_getState();
    this.fn_getCourse();
    this.employeeForm.controls.teamId.setValue("");
    this.employeeForm.controls.courseId.setValue("");
    this.employeeForm.controls.stateId.setValue("");
    this.employeeForm.controls.currentStateId.setValue("");
    this.employeeForm.controls.yearOfPassing.setValue("");
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
      else if (this.employeeForm.controls.interest.value.length == 0) {
        this.toastr.error('Please select atleast 1 interest');
        return false;
      }
      else if (this.emailExist == true) {
        return false;
      }
      else {
        const saveEmployeeurl = 'api/Employee';
        this.newArray.push(this.educationArray);
        this.newArray[0].forEach(element => {
          element.course = null;
        });
        value.value.EducationDetails = this.newArray[0];
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
      console.log(result);
      if (rs.statusCode === 200) {
        this.toastr.success('Employee details added successfully!');
        this.router.navigate(['user/employeelist']);
      } else {
        this.toastr.error('Failed to add Employee details' + rs);
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
    if (this.fn_validateEducationFields()) {
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
            this.fn_resetEducationDetails();
          }
        });
      }
      else {
        this.educationArray.push(newCourseModel);
        this.fn_resetEducationDetails();
      }
    }
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

  fn_validateEducationFields() {
    if (this.employeeForm.controls.courseId.value == null
      || (this.employeeForm.controls.yearOfPassing.value == null)
      || (this.employeeForm.controls.institution.invalid == true)
      || (this.employeeForm.controls.percentage.invalid == true)
    ) {
      this.toastr.error('Enter valid all educational details');
      return false;
    }
    else {
      return true;
    }
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
    this.employeeForm.controls.teamId.setValue("");
    this.employeeForm.controls.firstName.reset();
    this.employeeForm.controls.middleName.reset();
    this.employeeForm.controls.lastName.reset();
    this.employeeForm.controls.dob.reset();
    this.employeeForm.controls.address1.reset();
    this.employeeForm.controls.address2.reset();
    this.employeeForm.controls.city.reset();
    this.employeeForm.controls.pincode.reset();
    this.employeeForm.controls.stateId.setValue("");
    this.employeeForm.controls.mobile.reset();
    this.employeeForm.controls.currentAddress1.reset();
    this.employeeForm.controls.currentAddress2.reset();
    this.employeeForm.controls.currentCity.reset();
    this.employeeForm.controls.currentStateId.setValue("");
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
    this.employeeForm.controls.courseId.setValue("");
    this.employeeForm.controls.yearOfPassing.reset();
    this.employeeForm.controls.percentage.reset();
    this.employeeForm.controls.institution.reset();
  }

  fn_checkEmail(event) {
    debugger;
    var existEmailUrl = "api/User/IsEmailExist";
    var model =
    {
      "condition": event
    }
    this.CommonService.fn_PostWithData(model, existEmailUrl).subscribe((result: any) => {
      const stateResult = result;
      if (stateResult.statusCode === 200) {
        if (stateResult.data == true) {
          console.log('Email address is already exist');
          this.emailExist = true;
        }
        else {
          console.log('Email address is not exist');
          this.emailExist = false;
        }
      }
    });
  }
}

