import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { FormsModule, FormGroup, FormControl, Validators }   from '@angular/forms';
import { commonService } from 'src/app/common/services/common.service';

@Component({
  selector: 'category-add-update',
  templateUrl: './categoryaddupdate.html',
  providers: [commonService]
})
export class AddCategoryComponent implements OnInit {
  
  constructor(public router: Router, private CommonService: commonService, public http: Http, private toastr: ToastrService) {

  }


  ngOnInit() {}

  categoryForm = new FormGroup({
    categoryTitle: new FormControl('', Validators.required),
    categoryisActive: new FormControl('')
  });

  get categoryTitle(){
    return this.categoryForm.get('categoryTitle');
  }
  
  

  fn_saveCategory(data) {
    if (this.categoryForm.invalid) {
      this.categoryForm.setErrors({
        Validators
      })
    }
    const url = 'api/Master';
    const categoryModel =
    {
      // firstName: this.employeeForm.controls.firstName.value,
      name: data.value.categoryTitle ,
      isActive: data.value.categoryisActive,
      description: "",
      masterType: "Department"
     
    }
    console.log(categoryModel);

    this.fn_saveCategoryfun(url, categoryModel);
  }

  // function for save employee details.
  fn_saveCategoryfun(url, data) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      // debugger;
      // console.log(result);
      const rs = result;
      if (rs.statusCode == 200) {
        this.toastr.success('category  added successfully!');
        this.router.navigate(['manage/categorylist']);
      }
      else {
        this.toastr.success('Failed to add category');
      }
    });
  }
}
