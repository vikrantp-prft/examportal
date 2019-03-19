import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators,
  FormArray,
  FormBuilder,
  ValidatorFn
} from "@angular/forms";
import { Router } from "@angular/router";
import { Http } from "@angular/http";
import { commonService } from "src/app/common/services/common.service";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute } from "@angular/router";
import { appConfig } from "src/app/common/core/app.config";
import { $ } from "protractor";
import swal from "sweetalert2";
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: "employee-add-update",
  templateUrl: "./employeeaddupdate.html",
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
  public courseFlag: boolean = false;
  public fetchIndex: any;
  public updateEducationButton: boolean = false;
  public addEducationButton: boolean = true;
  public courseName: any;
  public customPatterns = { "0": { pattern: new RegExp("[a-zA-Z]") } };
  public yearOfPassingArray: Array<any> = [
    { year: 1991 },
    { year: 1992 },
    { year: 1993 },
    { year: 1994 },
    { year: 1995 },
    { year: 1996 },
    { year: 1997 },
    { year: 1998 },
    { year: 1999 },
    { year: 2000 },
    { year: 2001 },
    { year: 2002 },
    { year: 2003 },
    { year: 2004 },
    { year: 2005 },
    { year: 2006 },
    { year: 2007 },
    { year: 2008 },
    { year: 2009 },
    { year: 2010 },
    { year: 2011 },
    { year: 2012 },
    { year: 2013 },
    { year: 2014 },
    { year: 2015 },
    { year: 2016 },
    { year: 2017 },
    { year: 2018 }
  ];
  public interestArray: Array<any> = [
    {
      description: "Quality Assurance (QA)",
      value: "Quality Assurance (QA)",
      selected: false
    },
    { description: "HTML/CSS", value: "HTML/CSS", selected: false },
    { description: "Flash/Flex", value: "Flash/Flex", selected: false },
    { description: "Design", value: "Design", selected: false }
  ];

  constructor(
    private ngxService: NgxUiLoaderService,
    public router: Router,
    private CommonService: commonService,
    public http: Http,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.employeeForm = this.formBuilder.group({
      firstName: [
        null,
        [
          Validators.required,
          Validators.pattern(appConfig.pattern.NAME),
          Validators.maxLength(50)
        ]
      ],
      middleName: new FormControl(""),
      lastName: [
        null,
        [
          Validators.required,
          Validators.pattern(appConfig.pattern.NAME),
          Validators.maxLength(50)
        ]
      ],
      dob: [null, [Validators.required]],
      mobile: [
        null,
        [
          Validators.required,
          Validators.pattern(appConfig.pattern.PHONE_NO),
          Validators.maxLength(10)
        ]
      ],
      address1: [null, [Validators.required, Validators.maxLength(100)]],
      address2: new FormControl(""),
      city: [
        null,
        [
          Validators.required,
          Validators.pattern(appConfig.pattern.CITY),
          Validators.maxLength(30)
        ]
      ],
      stateId: ["", [Validators.required]],
      pincode: [
        null,
        [
          Validators.required,
          Validators.pattern(appConfig.pattern.PINCODE),
          Validators.maxLength(6)
        ]
      ],
      currentAddress1: [null, [Validators.required, Validators.maxLength(100)]],
      currentAddress2: new FormControl(""),
      currentCity: [
        null,
        [
          Validators.required,
          Validators.pattern(appConfig.pattern.CITY),
          Validators.maxLength(30)
        ]
      ],
      currentStateId: ["", [Validators.required]],
      currentPincode: [
        null,
        [
          Validators.required,
          Validators.pattern(appConfig.pattern.PINCODE),
          Validators.maxLength(6)
        ]
      ],
      note: new FormControl(""),
      teamId: ["", [Validators.required]],
      email: [
        null,
        [Validators.required, Validators.pattern(appConfig.pattern.EMAIL)]
      ],
      // password: [null, [Validators.required, Validators.pattern(appConfig.pattern.PASSWORD), Validators.maxLength(20)]],
      courseId: new FormControl(""),
      yearOfPassing: new FormControl(""),
      institution: new FormControl(""), //[null, [Validators.required, Validators.pattern(appConfig.pattern.DESCRIPTION), Validators.maxLength(30)]],
      percentage: new FormControl(""), //[null, [Validators.required, Validators.pattern(appConfig.pattern.DECIMAL)]],
      interest: new FormArray([]),
      educationDetails: new FormArray([])
    });
  }

  ngOnInit() {
    this.fn_getTeam();
    this.fn_getState();
    this.fn_getCourse();
    this.updateEducationButton = false;
    this.addEducationButton = true;
  }

  // function to display the error message for  validation.
  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).touched;
  }

  // Save Employee details function
  fn_saveEmployee(value) {
    if (this.employeeForm.valid) {
      if (this.educationArray.length === 0) {
        this.toastr.error("Please add education details");
        return false;
      } else if (this.emailExist == true) {
        return false;
      } else {
        const saveEmployeeurl = "api/Employee";
        this.newArray.push(this.educationArray);
        this.newArray[0].forEach(element => {
          element.course = null;
        });
        value.value.EducationDetails = this.newArray[0];
        this.fn_saveEmployeefun(value.value, saveEmployeeurl);
      }
    } else {
      this.CommonService.validateAllFormFields(this.employeeForm);
      this.toastr.error("Please fill required details");
      return false;
    }
  }

  // function for save employee details.
  fn_saveEmployeefun(data, url) {
    this.ngxService.start();
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode === 200) {
        const identityUser = {
          username: data.email,
          roleName: "EMPLOYEE",
          userId: rs.data.id
        };
        this.fn_saveIdentityUser(identityUser);

        this.ngxService.stop();
        this.toastr.success("Employee details added successfully!");
        this.router.navigate(["user/employeelist"]);
      } else {
        this.toastr.error("Failed to add Employee details" + rs);
      }
    });
  }

  //function for saving the employee detail in idenity users
  fn_saveIdentityUser(data) {
    this.ngxService.start();
    const url = "api/Identity/UserRegistration";
    this.CommonService.fn_PostWithIdentityData(data, url).subscribe(
      (result: any) => {
        if (result.statusCode === 200) {
          this.toastr.success("Password has been sent on email, please check the inbox.");
          this.ngxService.stop();
        } else {
          this.toastr.error("Something went wrong with Identity User");
        }
      }
    );
  }

  // function to get teams
  fn_getTeam() {
    const teamUrl = "api/Dropdown/Teams";
    this.ngxService.start();
    this.CommonService.fn_Get(teamUrl).subscribe((result: any) => {
      const teamResult = result;
      if (teamResult.statusCode === 200) {
        this.teamArray = teamResult.data;
        this.ngxService.stop();
      } else {
        this.teamArray = null;
      }
    });
  }

  //function to get course
  fn_getCourse() {
    const url = "api/Dropdown/Degrees";
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
    const stateUrl = "api/Dropdown/States";
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

  //function to add new course
  fn_addNewCourse() {
    this.courseFlag = false;
    this.fn_getCourseNameById(this.employeeForm.controls.courseId.value);
    if (this.fn_validateEducationFields()) {
      let newCourseModel = {
        courseId: this.employeeForm.controls.courseId.value,
        course: this.courseName,
        yearOfPassing: this.employeeForm.controls.yearOfPassing.value,
        institution: this.employeeForm.controls.institution.value,
        percentage: this.employeeForm.controls.percentage.value
      };
      if (this.educationArray.length != 0) {
        this.educationArray.forEach(element => {
          if (element.courseId == newCourseModel.courseId) {
            this.toastr.error("Course is already added");
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
      } else {
        this.educationArray.push(newCourseModel);
        this.fn_resetEducationDetails();
        return true;
      }
    }
  }

  //update selected course
  fn_updateNewCourse() {
    this.courseFlag = false;
    this.fn_getCourseNameById(this.employeeForm.controls.courseId.value);
    if (this.fn_validateEducationFields()) {
      let oldCourseModel = {
        courseId: this.employeeForm.controls.courseId.value,
        course: this.courseName,
        yearOfPassing: this.employeeForm.controls.yearOfPassing.value,
        institution: this.employeeForm.controls.institution.value,
        percentage: this.employeeForm.controls.percentage.value
      };
      for (var i = 0; i < this.educationArray.length; i++) {
        if (i != this.fetchIndex) {
          if (this.educationArray[i].courseId == oldCourseModel.courseId) {
            this.toastr.error("Course is already added");
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
        this.educationArray[this.fetchIndex].yearOfPassing =
          oldCourseModel.yearOfPassing;
        this.educationArray[this.fetchIndex].institution =
          oldCourseModel.institution;
        this.educationArray[this.fetchIndex].percentage =
          oldCourseModel.percentage;
        this.fn_resetEducationDetails();
        this.addEducationButton = true;
        this.updateEducationButton = false;
        return true;
      }
    }
  }

  //Get selected course value and text
  fn_getSelectedCourse(event: Event) {
    let selectedOptions = event.target["options"];
    let selectedIndex = selectedOptions.selectedIndex;
    let selectElementText = selectedOptions[selectedIndex].text;
    this.selectedCourse = selectElementText;
  }

  //fetch selected course
  fn_editCourse(index) {
    this.addEducationButton = false;
    this.updateEducationButton = true;
    this.fetchIndex = index;
    this.employeeForm.controls.courseId.setValue(
      this.educationArray[index].courseId
    );
    this.employeeForm.controls.yearOfPassing.setValue(
      this.educationArray[index].yearOfPassing
    );
    this.employeeForm.controls.institution.setValue(
      this.educationArray[index].institution
    );
    this.employeeForm.controls.percentage.setValue(
      this.educationArray[index].percentage
    );
  }

  //validate educartional details
  fn_validateEducationFields() {
    if (
      this.employeeForm.controls.courseId.value == "" ||
      this.employeeForm.controls.yearOfPassing.value == "" ||
      (this.employeeForm.controls.institution.value == "" ||
        this.employeeForm.controls.institution.value == null) ||
      (this.employeeForm.controls.percentage.value == "" ||
        this.employeeForm.controls.institution.value == null)
    ) {
      this.toastr.error("Enter valid all educational details");
      //this.fn_resetEducationDetails();
      return false;
    } else {
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
      this.employeeForm.controls.percentage.setValue("");
      return false;
    }
  }

  // Interest check change function
  fn_onInterestChange(event) {
    const checkedInterestArray: FormArray = this.employeeForm.get(
      "interest"
    ) as FormArray;
    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      checkedInterestArray.push(new FormControl(event.target.value));
    } else {
      /* unselected */
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
    this.employeeForm.controls.yearOfPassing.setValue("");
    this.employeeForm.controls.percentage.reset();
    this.employeeForm.controls.institution.reset();
  }

  fn_checkEmail(event) {
    var existEmailUrl = "api/User/IsEmailExist";
    var model = {
      condition: event
    };
    this.CommonService.fn_PostWithData(model, existEmailUrl).subscribe(
      (result: any) => {
        this.ngxService.start();
        const stateResult = result;
        if (stateResult.statusCode === 200) {
          if (stateResult.data == true) {
            this.ngxService.stop();
            this.emailExist = true;
          } else {
            this.emailExist = false;
          }
        }
      }
    );
  }

  // function to display the alert before deleting the Order.
  fn_deleteCourse(index) {
    if (index != null) {
      swal({
        title: "Are you sure?",
        text: "You want to delete the course!",
        buttonsStyling: true,
        confirmButtonClass: "btn btn-success",
        showCancelButton: true,
        cancelButtonClass: "btn btn-danger",
        confirmButtonText: "Yes, delete it!"
      }).then(x => {
        if (x.value == true) {
          this.educationArray.splice(index, 1);
          this.addEducationButton = true;
          this.updateEducationButton = false;
          this.fn_resetEducationDetails();
          this.toastr.success("Educational details deleted successfully");
        }
      });
    }
  }

  fn_setCurrentAddress(event) {
    if (event.target.checked) {
      debugger;
      this.employeeForm.controls.currentAddress1.setValue(
        this.employeeForm.controls.address1.value
      );
      this.employeeForm.controls.currentAddress2.setValue(
        this.employeeForm.controls.address2.value
      );
      this.employeeForm.controls.currentCity.setValue(
        this.employeeForm.controls.city.value
      );
      this.employeeForm.controls.currentStateId.setValue(
        this.employeeForm.controls.stateId.value
      );
      this.employeeForm.controls.currentPincode.setValue(
        this.employeeForm.controls.pincode.value
      );
    } else {
      this.employeeForm.controls.currentAddress1.reset();
      this.employeeForm.controls.currentAddress2.reset();
      this.employeeForm.controls.currentCity.reset();
      this.employeeForm.controls.currentStateId.reset();
      this.employeeForm.controls.currentPincode.reset();
    }
  }
}
