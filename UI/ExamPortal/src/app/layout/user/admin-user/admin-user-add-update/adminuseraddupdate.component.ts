import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'adminuser-add-update',
  templateUrl: './adminuseraddupdate.html'
})
export class AddAdminUserComponent implements OnInit {
  public adminForm: FormGroup;

  constructor() {
    this.adminForm = new FormGroup({
     firstName: new FormControl(),
     lastName: new FormControl(),
     dateOfBirth: new FormControl(),
     address1: new FormControl(),
     address2: new FormControl(),
     city: new FormControl(),
     phone: new FormControl(),
     pincode: new FormControl(),
     mobile: new FormControl(),
     note: new FormControl(),
     email: new FormControl(),
     pasword: new FormControl()
    });
  }

  ngOnInit() {}
}
