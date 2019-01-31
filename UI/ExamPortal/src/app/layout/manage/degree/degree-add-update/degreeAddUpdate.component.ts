import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { FormsModule, FormGroup, FormControl, Validators }   from '@angular/forms';
import { commonService } from 'src/app/common/services/common.service';

@Component({
  selector: 'degree-add-update',
  templateUrl: './degreeAddUpdate.html',
  providers: [commonService]
})
export class AddDegreeComponent implements OnInit {
  
  constructor(public router: Router, private CommonService: commonService, public http: Http, private toastr: ToastrService) {

  }


  ngOnInit() {}

  degreeForm = new FormGroup({
    degreeTitle: new FormControl('', Validators.required),
    degreeDescription: new FormControl('', Validators.required),
    degreeisActive: new FormControl('')
  });

  get degreeTitle(){
    return this.degreeForm.get('degreeTitle');
  }

  get degreeDescription(){
    return this.degreeForm.get('degreeDescription');
  }
  
  

  fn_saveDegree(data) {
    if (this.degreeForm.invalid) {
      this.degreeForm.setErrors({
        Validators
      })
    }
    const url = 'api/Master';
    const degreeModel =
    {
      // firstName: this.employeeForm.controls.firstName.value,
      name: data.value.degreeTitle ,
      isActive: true,
      description: data.value.degreeDescription,
      masterType: "Degree"
     
    }
    //console.log(teamModel);

    this.fn_saveDegreefun(url, degreeModel);
  }

    // function for save employee details.
    fn_saveDegreefun(url, data) {
      this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
        const rs = result;
        if (rs.statusCode == 200) {
          this.toastr.success('Degree added successfully!');
          this.router.navigate(['manage/degreeList']);
        }
        else {
          this.toastr.success('Failed to add degree');
        }
      });
    }
}
