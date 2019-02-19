import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { commonService } from 'src/app/common/services/common.service';
import swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';

interface paginationModel {
  pageNumber: number;
  pageSize: number;
  searchString: string;
}

@Component({
  selector: 'adminuser-list',
  templateUrl: './adminuserlist.html',
  styleUrls: ['./adminuserlist.component.scss'],
  providers: [commonService]
})
export class AdminUserListComponent implements OnInit {
  public params: any = {
    pageNumber: 1,
    pageSize: 10,
  };

  public adminModel: any = {
    "totalRecords": 0,
    "pageSize": 10,
    "pageNumber": 1
  }

  public getUserurl = 'api/User/GetUsers';
  public i: Number = 0;
  public startrecordno: Number = 1;
  public endrecord: Number = 1;
  public recordno = 0;
  public totalItems = 0;
  public userList = [];
  public statusUrl: any;
  constructor( private ngxService: NgxUiLoaderService, public router: Router, private CommonService: commonService, public http: Http, private toastr: ToastrService) { }

  ngOnInit() {
    this.fn_GetAdminUserList();
  }

  // Function for  pagination
  setRecordPerPage(event: any): void {
    this.params.pageNumber = 1;
    this.params.pageSize = event.target.value;
    this.fn_GetAdminUserList();
  }

  pageChanged(event: any): void {
    console.log(event);
    this.params.pageNumber = parseInt(event.page);
    this.params.pageSize = parseInt(event.itemsPerPage);
    this.fn_GetAdminUserList();
  }

  // Searching
  searchRecord(event: any): void {
    if (event.keyCode == 13) {
      this.adminModel.pageNumber = 1;
      this.adminModel.pageSize = 10;
      this.adminModel.filter = event.target.value;
      this.fn_GetAdminUserList();
    }
  }

  fn_GetAdminUserList() {
    this.ngxService.start();
    this.CommonService.fn_PostWithData(this.adminModel, this.getUserurl).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.ngxService.stop();
        this.userList = rs.data;
      }
      else {
      }
    });
  }

  // function to change isActive status
  fn_ChangeStatus(id, isActive) {
    debugger;
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
          this.statusUrl = 'api/User/InactivateUser';
          this.toastr.success('Inactivated admin details');
        }
        else {
          this.statusUrl = 'api/User/ActivateUser';
          this.toastr.success('Activated admin details');
        }
        const adminStatusModel = {
          "id": id,
        }
        this.fn_saveStatusChange(this.statusUrl, adminStatusModel);
      }
    });
  }

  fn_deleteAdminUser(Id) {
    if (Id != null) {
      swal({
        title: 'Are you sure?',
        text: 'You want to delete the User!',
        buttonsStyling: true,
        confirmButtonClass: 'btn btn-success',
        showCancelButton: true,
        cancelButtonClass: 'btn btn-danger',
        confirmButtonText: 'Yes, delete it!'
      }).then(x => {
        if (x.value = true) {
          const url = 'api/User/DeleteUser';
          const model = {
            id: ''
          };
          model.id = Id;
          this.fn_delfun(url, model);
        }
      });
    }
  }

  // function for soft deleting the Admin User.
  fn_delfun(url, data) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      this.ngxService.start();
      const rs = result;
      if ((result.message = 'Success')) {
        this.ngxService.stop();
        this.toastr.success('Users details deleted successfully!');
        this.fn_GetAdminUserList();
      }
    });
  }

  //function to save status change
  fn_saveStatusChange(url, data) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      this.ngxService.start();
      const rs = result;
      if (rs.statusCode == 200) {
        this.ngxService.stop();
        this.fn_GetAdminUserList();
      }
      else {

      }
    });
  }
}
