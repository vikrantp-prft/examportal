import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../_services/register.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  model: any = {};
  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }
  registerUser() {
    console.log(this.model);
    this.registerService.registerCandidate(this.model).subscribe(
      next => {
        console.log('called in successfully.');
      },
      error => {
        console.log('failed to call');
      }
    );
  }
}
