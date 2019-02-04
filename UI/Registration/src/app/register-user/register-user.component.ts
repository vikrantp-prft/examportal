import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../_services/register.service';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder, ValidatorFn, ReactiveFormsModule } from '@angular/forms';
import { appConfig } from '../common/core/app.config';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  model: any = {};
  public userRegistration: FormGroup;
  constructor(private registerService: RegisterService, private formBuilder: FormBuilder) {
    this.userRegistration = this.formBuilder.group({
      firstName: [null, [Validators.required, Validators.pattern(appConfig.pattern.NAME), Validators.maxLength(50)]],
      middleName: [null, [Validators.required, Validators.pattern(appConfig.pattern.NAME), Validators.maxLength(50)]],
      lastName: [null, [Validators.required, Validators.pattern(appConfig.pattern.NAME), Validators.maxLength(50)]]
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
}
