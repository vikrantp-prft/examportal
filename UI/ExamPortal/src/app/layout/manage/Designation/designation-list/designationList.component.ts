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
  selector: 'designation-list',
  templateUrl: './designationList.html',
  providers: [commonService]
})
export class DesignationListComponent implements OnInit {
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
  public designationList = [];

  // Constructor

  constructor(
        public router: Router, 
        private CommonService: commonService, 
        public http: Http, private toastr: ToastrService) {

  }
 
  // Lifecycle method

  ngOnInit() {
    this.fn_GetDesignationList();
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

  // Function to get list of employees
  fn_GetDesignationList() {
    const prop: paginationModel = {
      currentPage: parseInt(this.params.currentPage),
      pageSize: parseInt(this.params.pageSize),
      searchString: this.params.searchString
    };
    const url = 'api/Master/GetMasterByType';

    const designationModel =
    {
      "filter": "Designation",
    };

    this.CommonService.fn_PostWithData(designationModel, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
       this.designationList = rs.data;
      }
      else {
      }
    }); 
  }

  fn_deleteDesignation(Id) {
    if (Id != null) {
      swal({
        title: 'Are you sure?',
        text: 'You want to delete the Designation!',
        buttonsStyling: true,
        confirmButtonClass: 'btn btn-success',
        showCancelButton: true,
        cancelButtonClass: 'btn btn-danger',
        confirmButtonText: 'Yes, delete it!'
      }).then(x => {
        console.log(x);
        console.log(x.value);
        if (x.value == true) {
          console.log(x);
           console.log(x.value);
          const url = 'api/Master/DeleteMaster';
          const model = {
            id: ''
          };
          model.id = Id;
          this.fn_delDesignationFun(url, model);
        }
      });
     
    }
  }

  
  // function for soft deleting the Admin User.
  fn_delDesignationFun(url, data) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if ((rs.message == 'Success')) {
        this.toastr.success('Designation\'s details deleted successfully!');
        this.fn_GetDesignationList();
      }
      else{
        this.toastr.error("Not deleted");
      }
      
    });
  }

}
