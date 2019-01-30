import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { FormsModule, FormGroup, FormControl, Validators }   from '@angular/forms';
import { commonService } from 'src/app/common/services/common.service';

@Component({
  selector: 'category-edit-update',
  templateUrl: './categoryEditUpdate.component.html',
  providers: [commonService]
}) 
export class CategoryEditUpdateComponent implements OnInit {
  public categoryID: string = "";
  public categoryList: any ;
  constructor(
    private route: ActivatedRoute,
    public router: Router, 
    private CommonService: commonService, 
    public http: Http, private toastr: ToastrService) {
      this.route.params.subscribe(params => {
        this.categoryID = params['id'];
      });
  }

  ngOnInit() {
    this.fn_GetCategoryById(this.categoryID);
  }

  // Category form Model
  categoryForm = new FormGroup({
    categoryTitle: new FormControl('', Validators.required),
    categoryDescription: new FormControl('', Validators.required)
  });

  get categoryTitle(){
    return this.categoryForm.get('categoryTitle');
  }

  get categoryDescription(){
    return this.categoryForm.get('categoryDescription');
  }
  

  // Get category by id
  fn_GetCategoryById(categoryID) {
    const url = 'api/Master/GetMasterById';
    const categoryModel =
    {
      "id": categoryID,
      "pageSize": 0,
      "pageNumber": 0,
      "totleRecords": 0,
      "filter": "string",
      "sortBy": "string",
      "isDescending": true
    };

    this.CommonService.fn_PostWithData(categoryModel, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
       this.categoryList = rs.data;
       this.fn_setEditValues();
      }
      else {
      }
    }); 
    
  }

  // default values
  fn_setEditValues() {
    // this.categoryForm.controls.id.setValue(this.examID);
    this.categoryForm.controls.categoryTitle.setValue(this.categoryList.name);
    this.categoryForm.controls.categoryDescription.setValue(this.categoryList.description);
  }

  // Submit category
  fn_updateCategory(data) {
    if (this.categoryForm.invalid) {
      this.categoryForm.setErrors({
        Validators
      })
    }

    const url = 'api/Master/Update';
    const categoryModel =
    {
      id: this.categoryID,
      name: data.value.categoryTitle ,
      description: data.value.categoryDescription,
      masterType: "Category"
     
    }
    this.fn_updateCategoryfun(url, categoryModel);
  }

  // function for save category details.
  fn_updateCategoryfun(url, data) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.toastr.success('category  updated successfully!');
        this.router.navigate(['manage/categorylist']);
      }
      else {
        this.toastr.success('Failed to update category');
      }
    });
  }
}
