import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { commonService } from 'src/app/common/services/common.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'adminuser-add-update',
  templateUrl: './adminuseraddupdate.html'
})

export class AddAdminUserComponent implements OnInit {
  public adminForm: FormGroup;


  mobnumPattern = "^[7-9]{1}[0-9]{9}$";
  //emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  emailPattern = "^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$"

  public groupArray: any[];
  public teamArray: any[];
  public designationArray: any[];
  public stateArray: any[];

  constructor(public router: Router, private CommonService: commonService, public http: Http, private toastr: ToastrService) {
    this.adminForm = new FormGroup({
     groupId: new FormControl(''), 
     teamId: new FormControl(''),
     designationId: new FormControl(''),
     firstName: new FormControl('', Validators.required),
     lastName: new FormControl('', Validators.required),
     dateOfBirth: new FormControl(''),
     address1: new FormControl(''),
     address2: new FormControl(''),
     city: new FormControl(''),
     stateId: new FormControl(''),
     phone: new FormControl(''),
     pincode: new FormControl(''),
     mobile: new FormControl('', Validators.pattern(this.mobnumPattern)),
     note: new FormControl(''),
     email: new FormControl('', Validators.pattern(this.emailPattern)),
     password: new FormControl('', Validators.required),
     isActive: new FormControl('')
    });
  }

  ngOnInit() {

    this.fn_getGroup();
    this.fn_getTeam();
    this.fn_getDesignation();
    this.fn_getState();
  }

  fn_saveUser() {
    debugger;
    const url = 'api/User';
    const adminModel = 
    {
      firstName: this.adminForm.controls.firstName.value,
      lastName: this.adminForm.controls.lastName.value,
      isActive: true,
      password: this.adminForm.controls.password.value,
      dob: this.adminForm.controls.dateOfBirth.value,
      address1: this.adminForm.controls.address1.value,
      address2: this.adminForm.controls.address2.value,
      city: this.adminForm.controls.city.value,
      stateId: this.adminForm.controls.stateId.value,
      pincode: this.adminForm.controls.pincode.value,
      email: this.adminForm.controls.email.value,
      mobile: this.adminForm.controls.mobile.value,
      groupId: this.adminForm.controls.groupId.value,
      designationId: this.adminForm.controls.designationId.value,
      teamId: this.adminForm.controls.teamId.value,
      note: this.adminForm.controls.note.value,
    }

    this.fn_saveUserfun(url, adminModel);
}

  // function to save user details.
  fn_saveUserfun(url, data) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      debugger;
      const rs = result;
      if (rs.statusCode == 200) {
        //console.log("Record saved");
        this.toastr.success('User details added successfully!');
        //this.router.navigate(['user/adminuserlist']);
      }
      else {
        //console.log("not saved");
        this.toastr.error('Failed to add User details');
      }
    });
  }

   
   fn_getGroup() {
      const url = 'api/Dropdown/Groups';
      this.CommonService.fn_Get(url).subscribe((result: any) => {
      const teamResult = result;
      if (teamResult.statusCode == 200) {
        this.groupArray = teamResult.data;
      }
      else {
        this.groupArray = null;
      }
     });
  } 

   
    fn_getTeam() {
      const url = 'api/Dropdown/Teams';
      this.CommonService.fn_Get(url).subscribe((result: any) => {
      const teamResult = result;
      if (teamResult.statusCode == 200) {
        this.teamArray = teamResult.data;
      }
      else {
        this.teamArray = null;
      }
    });
  } 


    fn_getDesignation() {
      const url = 'api/Dropdown/Designations';
      this.CommonService.fn_Get(url).subscribe((result: any) => {
      const teamResult = result;
      if (teamResult.statusCode == 200) {
        this.designationArray = teamResult.data;
      }
      else {
        this.designationArray = null;
      }
    });
  } 

  
    fn_getState() {
      const url = 'api/Dropdown/States';
      this.CommonService.fn_Get(url).subscribe((result: any) => {
      const teamResult = result;
      if (teamResult.statusCode == 200) {
        this.stateArray = teamResult.data;
      }
      else {
        this.stateArray = null;
      }
    });
  } 
 

}


