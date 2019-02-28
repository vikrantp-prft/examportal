import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';
import { commonService } from 'src/app/common/services/common.service';
import { Http } from '@angular/http';
import { FormBuilder, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { appConfig } from 'src/app/common/core/app.config';

@Component({
  selector: 'traineeuser-add-update',
  templateUrl: './traineeUserAddUpdate.html'
})
export class AddTraineeUserComponent implements OnInit {

  public traineeForm: FormGroup;
  public stateArray: any[];
  public courseArray: any[];
  public courseName: any;
  selectedCourse: any;
  public emailExist: boolean = false;
  public newArray = [];
  public educationArray: Array<any> = [];
  public updateEducationButton: boolean = false;
  public addEducationButton: boolean = true;
  public courseFlag: boolean = false;
  public fetchIndex: any;

  public interestArray: Array<any> = [
    { description: 'Quality Assurance (QA)', value: 'Quality Assurance (QA)', selected: false },
    { description: 'HTML/CSS', value: 'HTML/CSS', selected: false },
    { description: 'Flash/Flex', value: 'Flash/Flex', selected: false },
    { description: 'Design', value: 'Design', selected: false }
  ];
  public yearOfPassingArray: Array<any> = [
    { year: 1991 }, { year: 1992 }, { year: 1993 }, { year: 1994 }, { year: 1995 }, { year: 1996 }, { year: 1997 }, { year: 1998 }, { year: 1999 }, { year: 2000 },
    { year: 2001 }, { year: 2002 }, { year: 2003 }, { year: 2004 }, { year: 2005 }, { year: 2006 }, { year: 2007 }, { year: 2008 }, { year: 2009 }, { year: 2010 },
    { year: 2011 }, { year: 2012 }, { year: 2013 }, { year: 2014 }, { year: 2015 }, { year: 2016 }, { year: 2017 }, { year: 2018 }
  ]

  constructor(private ngxService: NgxUiLoaderService, public router: Router, private CommonService: commonService, public http: Http,
    private formBuilder: FormBuilder, private toastr: ToastrService) {

    this.traineeForm = this.formBuilder.group({
      firstName: [null, [Validators.required, Validators.pattern(appConfig.pattern.NAME), Validators.maxLength(50)]],
      middleName: new FormControl(''),
      lastName: [null, [Validators.required, Validators.pattern(appConfig.pattern.NAME), Validators.maxLength(50)]],
      dob: [null, [Validators.required]],
      mobile: [null, [Validators.required, Validators.pattern(appConfig.pattern.PHONE_NO), Validators.maxLength(10)]],
      address1: [null, [Validators.required, Validators.maxLength(100)]],
      address2: new FormControl(''),
      city: [null, [Validators.required, Validators.pattern(appConfig.pattern.CITY), Validators.maxLength(30)]],
      stateId: ["", [Validators.required]],
      pincode: [null, [Validators.required, Validators.pattern(appConfig.pattern.PINCODE), Validators.maxLength(6)]],
      currentAddress1: [null, [Validators.required, Validators.maxLength(100)]],
      currentAddress2: new FormControl(''),
      currentCity: [null, [Validators.required, Validators.pattern(appConfig.pattern.CITY), Validators.maxLength(30)]],
      currentStateId: ["", [Validators.required]],
      currentPincode: [null, [Validators.required, Validators.pattern(appConfig.pattern.PINCODE), Validators.maxLength(6)]],
      note: new FormControl(''),
      email: [null, [Validators.required, Validators.pattern(appConfig.pattern.EMAIL)]],
      courseId: new FormControl(''),
      yearOfPassing: new FormControl(''),
      institution: new FormControl(''),//[null, [Validators.required, Validators.pattern(appConfig.pattern.DESCRIPTION), Validators.maxLength(30)]],
      percentage: new FormControl(''),//[null, [Validators.required, Validators.pattern(appConfig.pattern.DECIMAL)]],
      interest: new FormArray([]),
      educationDetails: new FormArray([])
    })
  }

  ngOnInit() {
    this.fn_getState();
    this.fn_getCourse();
    this.updateEducationButton = false;
    this.addEducationButton = true;
  }

  //function to get course
  fn_getCourse() {
    const url = 'api/Dropdown/Degrees';
    this.ngxService.start();
    this.CommonService.fn_Get(url).subscribe((result: any) => {
      const courseResult = result;
      if (courseResult.statusCode === 200) {
        this.courseArray = courseResult.data;
        this.ngxService.stop();
      } else {
        this.courseArray = null;
      }
    });
  }

  //get course name by courseId
  fn_getCourseNameById(courseId) {
    this.courseArray.forEach(element => {
      if (element.id == courseId) {
        this.courseName = element.name;
        return true;
      }
    });
  }

  //function to get state
  fn_getState() {
    const stateUrl = 'api/Dropdown/States';
    this.ngxService.start();
    this.CommonService.fn_Get(stateUrl).subscribe((result: any) => {
      const stateResult = result;
      if (stateResult.statusCode === 200) {
        this.stateArray = stateResult.data;
        this.ngxService.stop();
      } else {
        this.stateArray = null;
      }
    });
  }

  // function to display the error message for  validation.
  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).touched;
  }

  fn_saveTrainee(value) {
    console.log("Hi");
    if (this.traineeForm.valid) {
      console.log(this.traineeForm.valid);
      if (this.educationArray.length === 0) {
        this.toastr.error('Please add education details');
        return false;
      }
      else if (this.emailExist == true) {
        return false;
      }
      else {
        const saveTraineeurl = 'api/Aspirants';
        this.newArray.push(this.educationArray);
        this.newArray[0].forEach(element => {
          element.course = null;
        });
        value.value.EducationDetails = this.newArray[0];
        this.fn_saveTraineefun(value.value, saveTraineeurl);
      }
    } else {
      console.log(this.traineeForm);
      this.CommonService.validateAllFormFields(this.traineeForm);
      this.toastr.error('Please fill required details');
      return false;
    }
  }

  // function for save trainee details.
  fn_saveTraineefun(data, url) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      this.ngxService.start();
      const rs = result;
      if (rs.statusCode === 200) {
        this.ngxService.stop();
        this.toastr.success('Trainee details added successfully!');
        this.router.navigate(['user/traineelist']);
      } else {
        this.toastr.error('Failed to add Trainee details' + rs);
      }
    });
  }

  // Interest check change function
  fn_onInterestChange(event) {
    const checkedInterestArray: FormArray = this.traineeForm.get('interest') as FormArray;
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

  //function to add new course
  fn_addNewCourse() {
    this.courseFlag = false;
    this.fn_getCourseNameById(this.traineeForm.controls.courseId.value);
    if (this.fn_validateEducationFields()) {
      let newCourseModel = {
        courseId: this.traineeForm.controls.courseId.value,
        course: this.courseName,
        yearOfPassing: this.traineeForm.controls.yearOfPassing.value,
        institution: this.traineeForm.controls.institution.value,
        percentage: this.traineeForm.controls.percentage.value
      }
      if (this.educationArray.length != 0) {
        this.educationArray.forEach(element => {
          if (element.courseId == newCourseModel.courseId) {
            this.toastr.error('Course is already added');
            this.courseFlag = true;
            this.fn_resetEducationDetails();
            return false;
          }
        });
        if (this.courseFlag == false) {
          this.educationArray.push(newCourseModel);
          this.fn_resetEducationDetails();
          return true;
        }
      }
      else {
        this.educationArray.push(newCourseModel);
        this.fn_resetEducationDetails();
        return true;
      }
    }
  }

  //update selected course
  fn_updateNewCourse() {
    this.courseFlag = false;
    this.fn_getCourseNameById(this.traineeForm.controls.courseId.value);
    if (this.fn_validateEducationFields()) {
      let oldCourseModel = {
        courseId: this.traineeForm.controls.courseId.value,
        course: this.courseName,
        yearOfPassing: this.traineeForm.controls.yearOfPassing.value,
        institution: this.traineeForm.controls.institution.value,
        percentage: this.traineeForm.controls.percentage.value
      }
      for (var i = 0; i < this.educationArray.length; i++) {
        if (i != this.fetchIndex) {
          if (this.educationArray[i].courseId == oldCourseModel.courseId) {
            this.toastr.error('Course is already added');
            this.courseFlag = true;
            this.fn_resetEducationDetails();
            this.addEducationButton = true;
            this.updateEducationButton = false;
            return false;
          }
        }
      }
      if (this.courseFlag == false) {
        this.educationArray[this.fetchIndex].courseId = oldCourseModel.courseId;
        this.educationArray[this.fetchIndex].course = oldCourseModel.course;
        this.educationArray[this.fetchIndex].yearOfPassing = oldCourseModel.yearOfPassing;
        this.educationArray[this.fetchIndex].institution = oldCourseModel.institution;
        this.educationArray[this.fetchIndex].percentage = oldCourseModel.percentage;
        this.fn_resetEducationDetails();
        this.addEducationButton = true;
        this.updateEducationButton = false;
        return true;
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

  //fetch selected course
  fn_editCourse(index) {
    this.addEducationButton = false;
    this.updateEducationButton = true;
    this.fetchIndex = index;
    this.traineeForm.controls.courseId.setValue(this.educationArray[index].courseId);
    this.traineeForm.controls.yearOfPassing.setValue(this.educationArray[index].yearOfPassing);
    this.traineeForm.controls.institution.setValue(this.educationArray[index].institution);
    this.traineeForm.controls.percentage.setValue(this.educationArray[index].percentage);
  }


  fn_resetEducationDetails() {
    this.traineeForm.controls.courseId.setValue("");
    this.traineeForm.controls.yearOfPassing.setValue("");
    this.traineeForm.controls.percentage.reset();
    this.traineeForm.controls.institution.reset();
  }

  //validate educartional details
  fn_validateEducationFields() {
    if (this.traineeForm.controls.courseId.value == ""
      || this.traineeForm.controls.yearOfPassing.value == ""
      || (this.traineeForm.controls.institution.value == "" || this.traineeForm.controls.institution.value == null)
      || (this.traineeForm.controls.percentage.value == "" || this.traineeForm.controls.institution.value == null)
    ) {
      this.toastr.error('Enter valid all educational details');
      //this.fn_resetEducationDetails();
      return false;
    }
    else {
      return true;
    }
  }

  //percentage validation
  onlyPercentage(event) {
    debugger;
    var percentagePattern = appConfig.pattern.PERCENTAGE;
    if (percentagePattern.test(event.target.value)) {
      return true;
    } else {
      this.traineeForm.controls.percentage.setValue("");
      return false;
    }
  }

  fn_setCurrentAddress(event) {
    if (event.target.checked) {
      debugger;
      this.traineeForm.controls.currentAddress1.setValue(this.traineeForm.controls.address1.value);
      this.traineeForm.controls.currentAddress2.setValue(this.traineeForm.controls.address2.value);
      this.traineeForm.controls.currentCity.setValue(this.traineeForm.controls.city.value);
      this.traineeForm.controls.currentStateId.setValue(this.traineeForm.controls.stateId.value);
      this.traineeForm.controls.currentPincode.setValue(this.traineeForm.controls.pincode.value);
    }
    else {
      this.traineeForm.controls.currentAddress1.reset();
      this.traineeForm.controls.currentAddress2.reset();
      this.traineeForm.controls.currentCity.reset();
      this.traineeForm.controls.currentStateId.reset();
      this.traineeForm.controls.currentPincode.reset();
    }
  }

  fn_resetEmployeeDetails() {

    console.log("qwerty")
    this.traineeForm.controls.firstName.reset();
    this.traineeForm.controls.middleName.reset();
    this.traineeForm.controls.lastName.reset();
    this.traineeForm.controls.dob.reset();
    this.traineeForm.controls.address1.reset();
    this.traineeForm.controls.address2.reset();
    this.traineeForm.controls.city.reset();
    this.traineeForm.controls.pincode.reset();
    this.traineeForm.controls.stateId.setValue("");
    this.traineeForm.controls.mobile.reset();
    this.traineeForm.controls.currentAddress1.reset();
    this.traineeForm.controls.currentAddress2.reset();
    this.traineeForm.controls.currentCity.reset();
    this.traineeForm.controls.currentStateId.setValue("");
    this.traineeForm.controls.currentPincode.reset();
    this.traineeForm.controls.email.reset();
    this.traineeForm.controls.note.reset();
    this.educationArray = [];
    this.interestArray.forEach(element => {
      element.selected = false;
    });
    this.fn_resetEducationDetails();
  }

  fn_checkEmail(event) {
    var existEmailUrl = "api/User/IsEmailExist";
    var model =
    {
      "condition": event
    }
    this.CommonService.fn_PostWithData(model, existEmailUrl).subscribe((result: any) => {
      this.ngxService.start();
      const stateResult = result;
      if (stateResult.statusCode === 200) {
        if (stateResult.data == true) {
          this.ngxService.stop();
          this.emailExist = true;
        }
        else {
          this.emailExist = false;
        }
      }
    });
  }
}
