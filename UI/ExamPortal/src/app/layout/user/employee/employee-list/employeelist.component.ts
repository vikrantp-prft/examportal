import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { commonService } from "src/app/common/services/common.service";
import { Http } from "@angular/http";
import swal from "sweetalert2";
import { ToastrService } from "ngx-toastr";
import { NgxUiLoaderService } from "ngx-ui-loader";
interface paginationModel {
  pageNumber: number;
  pageSize: number;
  searchString: string;
}

@Component({
  selector: "employee-list",
  templateUrl: "./employeelist.html",
  styleUrls: ['./employeelist.component.scss'],
  providers: [commonService]
})
export class EmployeeListComponent implements OnInit {
  public employeeModel: any = {
    totalRecords: 0,
    pageSize: 10,
    pageNumber: 1
  };
  public i: Number = 0;
  public startrecordno: Number = 1;
  public endrecord: Number = 1;
  public recordno = 0;
  public totalItems = 0;
  public employeeList = [];
  public statusUrl: any;
  employeeData: any = { totalRecords: "" };

  // for import file
  filedata: string;

  // Constructor

  constructor(
    private ngxService: NgxUiLoaderService,
    public router: Router,
    private CommonService: commonService,
    public http: Http,
    private toastr: ToastrService
  ) {}
  showSuccess() {
    this.toastr.success("Hello world!", "Toastr fun!");
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
  searchRecord(event: any): void {
    if (event.keyCode == 13) {
      this.employeeModel.pageNumber = 1;
      this.employeeModel.pageSize = 10;
      this.employeeModel.filter = event.target.value;
      this.fn_GetEmployeeList();
    }
  }

  // Function to get list of employees
  fn_GetEmployeeList() {
    this.ngxService.start();
    const url = "api/Employee/GetEmployees";
    this.CommonService.fn_PostWithData(this.employeeModel, url).subscribe(
      (data: any) => {
        console.log(data);
        this.employeeList = data.data;
        this.employeeModel.totalRecords = data.totalRecords;
        this.ngxService.stop();
      },
      err => console.error(err),
      () => {}
    );
  }

  // function to display the alert before deleting the Order.
  fn_deleteEmployee(Id) {
    if (Id != null) {
      swal({
        title: "Are you sure?",
        text: "You want to delete the Employee!",
        buttonsStyling: true,
        confirmButtonClass: "btn btn-success",
        showCancelButton: true,
        cancelButtonClass: "btn btn-danger",
        confirmButtonText: "Yes, delete it!"
      }).then(x => {
        if (x.value == true) {
          const url = "api/Employee/DeleteEmployee";
          const model = {
            id: ""
            // deletedBy: 0
          };
          model.id = Id;
          // obj_SearchDetails.deletedBy = 1;
          this.fn_delfun(url, model);
        }
      });
    }
  }

  fn_ProvideAdminAccess(id) {
    swal({
      title: "Are you sure?",
      text: "You want to provide the admin access!",
      buttonsStyling: true,
      confirmButtonClass: "btn btn-success",
      showCancelButton: true,
      cancelButtonClass: "btn btn-danger",
      confirmButtonText: "Yes"
    }).then(x => {
      if (x.value == true) {
        this.statusUrl = "api/User/MarkUserAsAdmin";
        this.toastr.success("Admin access has been provided!");
        const adminStatusModel = {
          id: id
        };
        this.fn_ProvideAdminAccessApi(this.statusUrl, adminStatusModel);
      }
    });
  }

  //function to save status change
  fn_ProvideAdminAccessApi(url, data) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      this.ngxService.start();
      const rs = result;
      if (rs.statusCode === 200) {
        this.ngxService.stop();
        this.fn_GetEmployeeList();
      } else {
        this.toastr.error("Something went wrong!");
      }
    });
  }

  fn_ProvideContributorAccess(id) {
    swal({
      title: "Are you sure?",
      text: "You want to provide the contributor access!",
      buttonsStyling: true,
      confirmButtonClass: "btn btn-success",
      showCancelButton: true,
      cancelButtonClass: "btn btn-danger",
      confirmButtonText: "Yes"
    }).then(x => {
      if (x.value == true) {
        this.statusUrl = "api/User/MarkUserAsContributor";
        this.toastr.success("Contributor access has been provided!");
        const adminStatusModel = {
          id: id
        };
        this.fn_ProvideContributorAccessApi(this.statusUrl, adminStatusModel);
      }
    });
  }

  //function to save status change
  fn_ProvideContributorAccessApi(url, data) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      this.ngxService.start();
      const rs = result;
      if (rs.statusCode === 200) {
        this.ngxService.stop();
        this.fn_GetEmployeeList();
      } else {
        this.toastr.error("Something went wrong!");
      }
    });
  }

  // function for soft deleting the Employee.
  fn_delfun(url, data) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if ((result.message = "Success")) {
        this.toastr.success("Employee details deleted successfully!");
        this.fn_GetEmployeeList();
      }
      else {
        this.toastr.error("Failed to delete employee details");
      }
    });
  }

  // function to change isActive status
  fn_ChangeStatus(id, isActive) {
    swal({
      title: "Are you sure?",
      text: "You want to change the status!",
      buttonsStyling: true,
      confirmButtonClass: "btn btn-success",
      showCancelButton: true,
      cancelButtonClass: "btn btn-danger",
      confirmButtonText: "Yes"
    }).then(x => {
      if (x.value == true) {
        if (isActive == true) {
          this.statusUrl = "api/Employee/InactivateEmployee";
          this.toastr.success("Inactivated employee details");
        } else {
          this.statusUrl = "api/Employee/ActivateEmployee";
          this.toastr.success("Activated employee details");
        }
        const employeeStatusModel = {
          id: id
        };
        this.fn_saveStatusChange(this.statusUrl, employeeStatusModel);
      }
    });
  }

  //function to save status change
  fn_saveStatusChange(url, data) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.fn_GetEmployeeList();
      } else {
      }
    });
  }

  fn_fileChange(event) {
    const fileList: FileList = event.target.files;
    this.filedata = event.target.files[0].name;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData = new FormData();

      alert ('Inside fn_fileChange');
      formData.append('uploadFile', file, file.name);
      console.log(formData);
      const apiUrl = 'api/Employee/ImportEmployees';
      debugger;
      this.CommonService.fn_UploadImage(apiUrl, formData).subscribe(
        (result: any) => {
          const rs = result;
           console.log(rs);
          if (rs == true) {
            this.toastr.success('Employees imported successfully!');
            this.fn_GetEmployeeList();
          }
          else {
            this.toastr.success('Failed to import Employees!');
          }
        }
      );
    }
  }
}
