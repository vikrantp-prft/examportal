import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { commonService } from 'src/app/common/services/common.service';
import { Http } from '@angular/http';
import swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
interface paginationModel {
  pageNumber: number;
  pageSize: number;
  searchString: string;
}
@Component({
  selector: 'category-list',
  templateUrl: './categorylist.html',
  providers: [commonService]
})
export class CategoryListComponent implements OnInit {
  // Declaration
  public params: any = {
    pageNumber: 1,
    pageSize: 10,
    filter: ''
  };
  public i: Number = 0;
  public startrecordno: Number = 1;
  public endrecord: Number = 1;
  public recordno = 0;
  public totalItems = 0;
  public categoryList = [];
  public editCategoryList: any;
  public statusUrl: any;
  public categoryModel =
    {
      "condition": "Category",
      "pageSize": 10,
      "pageNumber": 1
    };
  // Constructor
  constructor(private ngxService: NgxUiLoaderService, public router: Router, private CommonService: commonService, public http: Http, private toastr: ToastrService) { }
  toggle: boolean = true;
  // Lifecycle method
  ngOnInit() {
    this.fn_GetCategoryList();
  }
  frmReset() {
    this.categoryForm.reset();
  }
  categoryForm = new FormGroup({
    categoryTitle: new FormControl('', [Validators.required]),
    categoryDescription: new FormControl('',)
  });
  get categoryTitle() {
    return this.categoryForm.get('categoryTitle');
  }
  get categoryDescription() {
    return this.categoryForm.get('categoryDescription');
  }
  // Function to save category
  fn_saveCategory(data) {
    const url = 'api/Master';
    const categoryModel =
    {
      // firstName: this.employeeForm.controls.firstName.value,
      name: data.value.categoryTitle,
      isActive: true,
      description: data.value.categoryDescription,
      masterType: "Category"
    }
    this.fn_saveCategoryfun(url, categoryModel);
  }
  // function for save question category details.
  fn_saveCategoryfun(url, data) {
    this.ngxService.start();
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.ngxService.stop();
        this.toastr.success('category  added successfully!');
        this.fn_GetCategoryList();
        this.frmReset();
      }
      else {
        this.toastr.success('Failed to add category');
      }
    });
  }
  // Get category by id
  fn_GetCategoryById(categoryID) {
    this.ngxService.start();
    const url = 'api/Master/GetMasterById';
    const categoryModel =
    {
      "id": categoryID,
      "pageSize": 0,
      "pageNumber": 0,
      "totleRecords": 0,
      "filter": "string",
      "sortBy": "string",
      "isDescending": true
    };
    this.CommonService.fn_PostWithData(categoryModel, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.ngxService.stop();
        this.editCategoryList = rs.data;
        this.fn_setEditValues();
      }
      else {
      }
    });
  }
  // default values
  fn_setEditValues() {
    // this.categoryForm.controls.id.setValue(this.examID);
    this.categoryForm.controls.categoryTitle.setValue(this.editCategoryList.name);
    this.categoryForm.controls.categoryDescription.setValue(this.editCategoryList.description);
  }
  // Update category
  fn_updateCategory(data) {
    const url = 'api/Master/Update';
    const categoryModel =
    {
      id: this.editCategoryList.id,
      name: data.value.categoryTitle,
      description: data.value.categoryDescription,
      masterType: "Category"
    }
    this.fn_updateCategoryfun(url, categoryModel);
  }
  // function for save category details.
  fn_updateCategoryfun(url, data) {
    this.ngxService.start();
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.ngxService.stop();
        this.toastr.success('category  updated successfully!');
        this.fn_GetCategoryList();
      }
      else {
        this.toastr.success('Failed to update category');
      }
    });
  }
  // Function for  pagination
  setRecordPerPage(event: any): void {
    this.categoryModel.pageNumber = 1;
    this.categoryModel.pageSize = event.target.value;
    this.fn_GetCategoryList();
  }
  pageChanged(event: any): void {
    this.categoryModel.pageNumber = event.page;
    this.fn_GetCategoryList();
  }
  trimming_fn(x) {
    return x ? x.replace(/^\s+|\s+$/gm, '') : '';
  };
  // Searching
  searchRecord(event: any): void {
    const searchModel =
    {
      "id": "string",
      "condition": "Category",
      "pageSize": 10,
      "pageNumber": 0,
      "totalRecords": 0,
      "filter": this.trimming_fn(event.target.value),
      "sortBy": "string",
      "isDescending": true
    }
    this.fn_GetFilteredList(searchModel);
  }
  fn_GetFilteredList(data) {
    this.ngxService.start();
    const url = 'api/Master/GetMasterByType';
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.ngxService.stop();
        this.categoryList = rs.data;
      }
      else {
      }
    });
  }
  // Get question category list
  fn_GetCategoryList() {
    this.ngxService.start();
    const url = 'api/Master/GetMasterByType';
    this.CommonService.fn_PostWithData(this.categoryModel, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.ngxService.stop();
        this.categoryList = rs.data;
        this.totalItems = rs.totalRecords;
      }
      else {
      }
    });
  }
  // function to display the alert before deleting the Order.
  fn_deleteCategory(Id) {
    if (Id != null) {
      swal({
        title: 'Are you sure?',
        text: 'You want to delete the Category!',
        buttonsStyling: true,
        confirmButtonClass: 'btn btn-success',
        showCancelButton: true,
        cancelButtonClass: 'btn btn-danger',
        confirmButtonText: 'Yes, delete it!'
      }).then(x => {
        if (x.value == true) {
          const url = 'api/Master/DeleteMaster';
          const model = {
            "id": Id,
            "pageSize": 0,
            "pageNumber": 0,
            "totleRecords": 0,
            "filter": "string",
            "sortBy": "string",
            "isDescending": true
          };
          // obj_SearchDetails.deletedBy = 1;
          this.fn_delfun(url, model);
        }
      });
    }
  }
  // function for soft deleting the Employee.
  fn_delfun(url, data) {
    this.ngxService.start();
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if ((result.message == 'Success')) {
        this.ngxService.stop();
        this.toastr.success('Category details deleted successfully!');
        this.fn_GetCategoryList();
      }
    });
  }
  // function to change isActive status
  fn_ChangeStatus(id, isActive) {
    swal({
      title: 'Are you sure?',
      text: 'You want to change the status!',
      buttonsStyling: true,
      confirmButtonClass: 'btn btn-success',
      showCancelButton: true,
      cancelButtonClass: 'btn btn-danger',
      confirmButtonText: 'Yes'
    }).then(x => {
      if (x.value == true) {
        if (isActive == true) {
          this.statusUrl = 'api/Master/InactivateMaster';
        }
        else {
          this.statusUrl = 'api/Master/ActivateMaster';
        }
        const categoryStatusModel = {
          "id": id
        }
        this.fn_saveStatusChange(this.statusUrl, categoryStatusModel);
      }
    });
  }
  //function to save status change
  fn_saveStatusChange(url, data) {
    this.ngxService.start();
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.ngxService.stop();
        this.fn_GetCategoryList();
      }
    });
  }
}
