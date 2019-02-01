import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { commonService } from 'src/app/common/services/common.service';
import { Http } from '@angular/http';
import swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
interface paginationModel {
  pageNumber: number;
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

  // public params: any = {
  //   pageNumber: 1,
  //   pageSize: 10,
  //   searchString: ''
  // };
  // public employeeModel: any = {
  //   "id": null,
  //   "filter": "string",
  //   "pageSize": 10,
  //   "pageNumber": 1,
  //   "totleRecords": 0,
  //   "filterBy": "string",
  //   "sortBy": "string",
  //   "isDescending": true,
  //   "searchString":"string"
  // };

  public employeeModel: any = {
    // "id": "string",
    // "pageSize": 0,
    // "pageNumber": 0,
    "totalRecords": 0,
    // "filter": "string",
    // "sortBy": "string",
    // "isDescending": true
    "pageSize": 10,
    "pageNumber": 1
  }
  public i: Number = 0;
  public startrecordno: Number = 1;
  public endrecord: Number = 1;
  public recordno = 0;
  public totalItems = 0;
  public employeeList = [];
  employeeData : any = {totalRecords : ''};

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
    this.employeeModel.pageNumber = 1;
    this.employeeModel.pageSize = event.target.value;
    this.fn_GetEmployeeList();
  }

  pageChanged(event: any): void {
    this.employeeModel.pageNumber = parseInt(event.page);
    this.employeeModel.pageSize = parseInt(event.itemsPerPage);
    this.fn_GetEmployeeList();
  }
  // Searching
  searchRecord(event: any): void { }


  // Function to get list of employees

  fn_GetEmployeeList() {
    const url = 'api/Employee/GetEmployees';
    this.CommonService.fn_PostWithData(this.employeeModel, url).subscribe(
      (data: any) => {
        this.employeeList = data.data;
        this.employeeModel.totalRecords = data.totalRecords;
      },
      err => console.error(err),
      () => { }
    );
  }

  // Function to get employee ID
  fn_getEmployee(empid) {
    this.router.navigate(['/user/updateemployee'], { queryParams: { _empid: empid } });
  }

  // function to display the alert before deleting the Order.
  fn_deleteEmployee(Id) {
    debugger;
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
        if (x.value == true) {
          const url = 'api/Employee/DeleteEmployee';
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
