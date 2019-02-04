import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { commonService } from 'src/app/common/services/common.service';
import { Http } from '@angular/http';
import swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
interface paginationModel {
  pageNumber: number;
  pageSize: number;
  searchString: string; 
}

@Component({
  selector: 'category-list',
  templateUrl: './categorylist.html',
  providers: [commonService]
})
export class CategoryListComponent implements OnInit {
  // Declaration

  public params: any = {
    // "id": "string",
    // "pageSize": 10,
    // "pageNumber": 1,
    // "totalRecords": 0,
    // "filter": "string",
    // "sortBy": "string",
    // "isDescending": true
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
  public statusUrl: any;
  public searchValue : string = ' ';

  public categoryModel =
    {
      "condition": "Category",
      //"pageSize": 10
    };

  // Constructor

  constructor(public router: Router, private CommonService: commonService, public http: Http, private toastr: ToastrService) {}
  toggle: boolean = true;
  // Lifecycle method

  ngOnInit() {
    this.fn_GetCategoryList();
  }

  // Function for  pagination
  setRecordPerPage(event: any): void {
    this.params.pageNumber = 1;
    this.params.pageSize = event.target.value;
    this.fn_GetCategoryList();
  }
  pageChanged(event: any): void {
    this.params.pageNumber = parseInt(event.page);
    this.params.pageSize = parseInt(event.itemsPerPage);
    this.fn_GetCategoryList();
  }

  // Searching
  searchRecord(event: any): void {
    if(event.keyCode == 13) {
      console.log(this.searchValue);
      alert('you just clicked enter');
      // this.params.pageNumber = 1;
      // this.params.pageSize = 10; 
      // this.params.filter = this.searchValue;
      const searchModel=
      {
        "id": "string",
        "condition": "Category",
        "pageSize": 0,
        "pageNumber": 0,
        "totalRecords": 0,
        "filter": this.searchValue,
        "sortBy": "string",
        "isDescending": true
      }
      this.fn_GetFilteredList(searchModel);
    console.log(this.categoryModel);

    }
  }

  fn_GetFilteredList(data) {
    const url = 'api/Master/GetMasterByType';
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.categoryList = rs.data;
        // console.log(rs);
        // this.totalItems = rs.totalRecords;
      }
      else {
      }
    });
  }

  fn_GetCategoryList() {
    const prop: paginationModel = {
      pageNumber: parseInt(this.params.currentPage),
      pageSize: parseInt(this.params.pageSize),
      searchString: this.params.searchString
    };
    const url = 'api/Master/GetMasterByType';

    console.log(this.categoryModel);

    this.CommonService.fn_PostWithData(this.categoryModel, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
       this.categoryList = rs.data;
      }
      else {
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
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if ((result.message == 'Success')) {
        this.toastr.success('Category details deleted successfully!');
        this.fn_GetCategoryList();
      }

    });
  }


  // function to change isActive status
  fn_ChangeStatus(id,isActive)
  {
    swal({
      title: 'Are you sure?',
      text: 'You want to change the status!',
      buttonsStyling: true,
      confirmButtonClass: 'btn btn-success',
      showCancelButton: true,
      cancelButtonClass: 'btn btn-danger',
      confirmButtonText: 'Yes'
    }).then(x => {
    if(x.value == true){
        if(isActive == true){
          this.statusUrl = 'api/Master/InactivateMaster';
        }
        else{
          this.statusUrl = 'api/Master/ActivateMaster';
        }
        const categoryStatusModel = {
          "id": id,
          "pageSize": 0,
          "pageNumber": 0,
          "totalRecords": 0,
          "filter": "string",
          "sortBy": "string",
          "isDescending": true
        }
        this.fn_saveStatusChange(this.statusUrl,categoryStatusModel);
    }
    });
  }

  //function to save status change
  fn_saveStatusChange(url, data) {
      this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      // debugger;
      // console.log(result);
      const rs = result;
      if (rs.statusCode == 200) {
          this.fn_GetCategoryList();
      }
      else {
          
      }
  });
  }


}
