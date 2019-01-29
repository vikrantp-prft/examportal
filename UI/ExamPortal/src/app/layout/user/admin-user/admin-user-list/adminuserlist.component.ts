import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { commonService } from 'src/app/common/services/common.service';
import swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

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

  public url = 'api/User/GetUsers';


  public i: Number = 0;
  public startrecordno: Number = 1;
  public endrecord: Number = 1;
  public recordno = 0;
  public totalItems = 0;
  public employeeList = [];
  toastr: any;
  constructor(public router: Router, private CommonService: commonService, public http: Http) { }
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
  }

  ngOnInit() {
    this.fn_GetAdminUserList();
  }

  fn_GetAdminUserList() {
    const prop: paginationModel = {
      pageNumber: parseInt(this.params.pageNumber),
      pageSize: parseInt(this.params.pageSize),
      searchString: this.params.searchString
    };
    this.CommonService.fn_PostWithData(this.params, this.url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.employeeList = rs.data;
      }
      else {
      }
    });

    // this.CommonService.fn_Get(url).subscribe(
    //   (data: any) => {
    //       this.employeeList = data.data;
    //   },
    //   err => console.error(err),
    //   () => {}
    // );
  }

  fn_getEmployee(id) {

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
          const url = 'api/User/InactivateUser';
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
      const rs = result;
      if ((result.message = 'Success')) {
        this.toastr.success('User\'s details deleted successfully!');
        this.fn_GetAdminUserList();
      }
    });
  }
}
