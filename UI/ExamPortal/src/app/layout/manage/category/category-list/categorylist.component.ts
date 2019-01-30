import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { commonService } from 'src/app/common/services/common.service';
import { Http } from '@angular/http';
import swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
interface paginationModel {
  currentPage: number;
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
    currentPage: 1,
    pageSize: 10,
    searchString: ''
  };
  public i: Number = 0;
  public startrecordno: Number = 1;
  public endrecord: Number = 1;
  public recordno = 0;
  public totalItems = 0;
  public categoryList = [];

  // Constructor

  constructor(public router: Router, private CommonService: commonService, public http: Http, private toastr: ToastrService) {}
  toggle: boolean = true;
  // Lifecycle method

  ngOnInit() {
    this.fn_GetCategoryList();
  }

  // Function for  pagination
  setRecordPerPage(event: any): void {
    this.params.currentPage = 1;
    this.params.pageSize = event.target.value;
  }
  pageChanged(event: any): void {
    this.params.currentPage = parseInt(event.page);
    this.params.pageSize = parseInt(event.itemsPerPage);
  }

  // Searching
  searchRecord(event: any): void {}

  fn_GetCategoryList() {
    const prop: paginationModel = {
      currentPage: parseInt(this.params.currentPage),
      pageSize: parseInt(this.params.pageSize),
      searchString: this.params.searchString
    };
    const url = 'api/Master/GetMasterByType';

    const categoryModel =
    {
      "filter": "Category",
      "pageSize": 0,
      "pageNumber": 0,
      "totleRecords": 0,
      "filterBy": "string",
      "sortBy": "string",
      "isDescending": true
    };

    this.CommonService.fn_PostWithData(categoryModel, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
       this.categoryList = rs.data;
      }
      else {
      }
    }); 
  }

  // Inactivate category
  fn_ChangeStatus(categoryid, isactive){
    if(isactive == true){
      const toggleUrl = "api/Master/InactivateMaster";
   
      const categoryModel =
      {
        "id": categoryid,
        "pageSize": 0,
        "pageNumber": 0,
        "totleRecords": 0,
        "filter": "string",
        "sortBy": "string"
      };
  
      this.CommonService.fn_PostWithData(categoryModel, toggleUrl).subscribe((result: any) => {
        const rs = result;
        if (rs.statusCode == 200) {
         this.categoryList = rs.data;
        }
        else {
        }
      }); 
    }
    if(isactive == false){
      const toggleUrl = "api/Master/ActivateMaster";
   
      const categoryModel =
      {
        "id": categoryid,
        "pageSize": 0,
        "pageNumber": 0,
        "totleRecords": 0,
        "filter": "string",
        "sortBy": "string"
      };
  
      this.CommonService.fn_PostWithData(categoryModel, toggleUrl).subscribe((result: any) => {
        const rs = result;
        if (rs.statusCode == 200) {
         this.categoryList = rs.data;
        }
        else {
        }
      }); 
    }
    //this.fn_GetCategoryList();
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
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if ((result.message == 'Success')) {
        this.toastr.success('Category details deleted successfully!');
        this.fn_GetCategoryList();
      }

    });
  }
}
