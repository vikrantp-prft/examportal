import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../_services/register.service';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder, ValidatorFn, ReactiveFormsModule } from '@angular/forms';
import { appConfig } from '../Common/core/app.config';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  model: any = {};
  public educationArray: Array<any> = [];
  public experienceArray: Array<any>= [];
  public userRegistration: FormGroup;
  public courseFlag: boolean = false;
  public experienceFlag: boolean = false;
  public addEducationButton: boolean = true;
  public addExperienceButton: boolean = true;


  constructor(private registerService: RegisterService, private formBuilder: FormBuilder) {
    this.userRegistration = this.formBuilder.group({
      firstName: [null, [Validators.required, Validators.pattern(appConfig.pattern.NAME), Validators.maxLength(50)]],
      middleName: [null, [Validators.required, Validators.pattern(appConfig.pattern.NAME), Validators.maxLength(50)]],
      lastName: [null, [Validators.required, Validators.pattern(appConfig.pattern.NAME), Validators.maxLength(50)]],
      dob: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern(appConfig.pattern.EMAIL), Validators.maxLength(50)]],
      mobile: [null, [Validators.required]],
      currentAddress: [null, [Validators.required]],
      currentAddress2: new FormControl(''),
      currentCity: [null, [Validators.required, Validators.pattern(appConfig.pattern.CITY), Validators.maxLength(50)]],
      currentState: [null, [Validators.required]],
      permanantAddress: [null, [Validators.required]],
      permanantAddress2: new FormControl(''),
      permanantCity: [null, [Validators.required, Validators.pattern(appConfig.pattern.CITY), Validators.maxLength(50)]],
      permanantState: [null, [Validators.required]],
      course: [null, [Validators.required]],
      institution: [null, [Validators.required]],
      yearOfPassing: [null, [Validators.required]],
      percentage: [null, [Validators.required]],
      experience: new FormControl(''),
      companyName: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      experienceID: new FormControl('')
    });

  }

  ngOnInit() {
    this.userRegistration.controls.lastname.setValue('');
  }
  registerUser(value) {
    console.log(this.model);
    console.log(value.value);
    this.registerService.registerCandidate(value.value).subscribe(
      next => {
        console.log('called in successfully.');
      },
      error => {
        console.log('failed to call');
      }
    );
  }

  // function to display the error message for  validation.
  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).touched;
  }

  
  fn_addNewCourse() {
    let newCourseModel = {
      //courseId: this.userRegistration.controls.courseId.value,
      course: this.userRegistration.controls.course.value,
      yearOfPassing: this.userRegistration.controls.yearOfPassing.value,
      institution: this.userRegistration.controls.institution.value,
      percentage: this.userRegistration.controls.percentage.value
    }
    if (this.educationArray.length != 0) {
      this.educationArray.forEach(element => {
        if (element.course == newCourseModel.course) {
          //this.toastr.error('Course is already added');
          this.courseFlag = true;
          //this.fn_resetEducationDetails();
          return false;
        }
      });
      if (this.courseFlag == false) {
        this.educationArray.push(newCourseModel);
        //this.fn_resetEducationDetails();
        return true;
      }
    }
    else {
      this.educationArray.push(newCourseModel);
      //this.fn_resetEducationDetails();
      return true;
    }
  }

  fn_addNewExperience() {
    let newExperienceModel = {
      //courseId: this.userRegistration.controls.courseId.value,
      experienceID: this.userRegistration.controls.experience.value,
      experience: this.userRegistration.controls.experience.value,
      companyName: this.userRegistration.controls.companyName.value
    }
    if (this.experienceArray.length != 0) {
      this.experienceArray.forEach(element => {
        if (element.experienceId == newExperienceModel.experienceID) {
          //this.toastr.error('Course is already added');
          this.experienceFlag = true;
          //this.fn_resetEducationDetails();
          return false;
        }
      });
      if (this.experienceFlag == false) {
        this.experienceArray.push(newExperienceModel);
        //this.fn_resetEducationDetails();
        return true;
      }
    }
    else {
      this.experienceArray.push(newExperienceModel);
      //this.fn_resetEducationDetails();
      return true;
    }
  }
}
