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
  selector: 'employee-list',
  templateUrl: './employeelist.html',
  providers: [commonService]
})
export class EmployeeListComponent implements OnInit {
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
  public employeeList = [];

  // Constructor

  constructor(public router: Router, private CommonService: commonService, public http: Http, private toastr: ToastrService) { }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  // Lifecycle method

  ngOnInit() {
    this.fn_GetEmployeeList();
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
  searchRecord(event: any): void { }

  // Function to get list of employees

  fn_GetEmployeeList() {
    debugger;
    const prop: paginationModel = {
      currentPage: parseInt(this.params.currentPage),
      pageSize: parseInt(this.params.pageSize),
      searchString: this.params.searchString
    };
    const url = 'api/Employee/';

    this.CommonService.fn_Get(url).subscribe(
      (data: any) => {
        debugger;
        // if (data != null && data.statusCode === 200) {
        this.employeeList = data.data;
      },
      err => console.error(err),
      () => { }
    );
  }

  // Function to get employee ID
  fn_getEmployee(empid) {
    this.router.navigate(['/user/updateemployee'],{queryParams:{_empid:empid}});
  }

  // function to display the alert before deleting the Order.
  fn_deleteEmployee(Id) {
    if (Id != null) {
      swal({
        title: 'Are you sure?',
        text: 'You want to delete the Employee!',
        buttonsStyling: true,
        confirmButtonClass: 'btn btn-success',
        showCancelButton: true,
        cancelButtonClass: 'btn btn-danger',
        confirmButtonText: 'Yes, delete it!'
      }).then(x => {
        if (x.value = true) {
          const url = 'api/User/InactivateUser';
          const model = {
            id: ''
            // deletedBy: 0
          };
          model.id = Id;
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
      if ((result.message = 'Success')) {
        this.toastr.success('Employee details deleted successfully!');
        this.fn_GetEmployeeList();
      }
    });
  }
}
