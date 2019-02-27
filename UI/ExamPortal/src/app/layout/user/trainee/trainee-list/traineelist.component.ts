import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { commonService } from 'src/app/common/services/common.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2';

interface paginationModel {
  currentPage: number;
  pageSize: number;
  searchString: string;
}

@Component({
  selector: 'trainee-list',
  templateUrl: './traineeList.html',
  providers: [commonService]

})
export class TraineeListComponent implements OnInit {

  public traineeModel: any = {
    "totalRecords": 0,
    "pageSize": 10,
    "pageNumber": 1
  }

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
  public traineeList = [];
  public statusUrl: any;

  constructor( private ngxService: NgxUiLoaderService, public router: Router, private CommonService: commonService, public http: Http, private toastr: ToastrService) 
  { }
  // Function for  pagination
  setRecordPerPage(event: any): void {
    this.traineeModel.pageNumber = 1;
    this.traineeModel.pageSize = event.target.value;
    this.fn_GetTraineeList();
  }
  pageChanged(event: any): void {
    this.traineeModel.pageNumber = parseInt(event.page);
    this.traineeModel.pageSize = parseInt(event.itemsPerPage);
    this.fn_GetTraineeList();
  }
  // Searching
  searchRecord(event: any): void {
    if (event.keyCode == 13) {
      this.traineeModel.pageNumber = 1;
      this.traineeModel.pageSize = 10;
      this.traineeModel.filter = event.target.value;
      this.fn_GetTraineeList();
    }
  }
  ngOnInit() {
    this.fn_GetTraineeList();
  }

  fn_GetTraineeList() {
    
    const url = 'api/Aspirants/GetAspirants';

    this.CommonService.fn_PostWithData(this.traineeModel, url).subscribe(
      (data: any) => {        
          console.log(data);
          this.traineeList = data.data;
          console.log(this.traineeList);
        },
      err => console.error(err),
      () => { }
    );
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
          this.statusUrl = "api/Aspirants/InactivateAspirants";
          this.toastr.success("Inactivated aspirant details");
        } else {
          this.statusUrl = "api/Aspirants/ActiveAspirant";
          this.toastr.success("Activated aspirant details");
        }
        const aspirantsStatusModel = {
          id: id
        };
        this.fn_saveStatusChange(this.statusUrl, aspirantsStatusModel);
      }
    });
  }

   //function to save status change
   fn_saveStatusChange(url, data) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.fn_GetTraineeList();
      } else {
      }
    });
  }

  // function to display the alert before deleting the Order.
  fn_deleteTrainee(Id) {
    if (Id != null) {
      swal({
        title: "Are you sure?",
        text: "You want to delete the Aspirant!",
        buttonsStyling: true,
        confirmButtonClass: "btn btn-success",
        showCancelButton: true,
        cancelButtonClass: "btn btn-danger",
        confirmButtonText: "Yes, delete it!"
      }).then(x => {
        if (x.value == true) {
          const url = "api/Aspirants/DeleteAspirant";
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

   // function for soft deleting the Employee.
   fn_delfun(url, data) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if ((result.message = "Success")) {
        this.toastr.success("Aspirant details deleted successfully!");
        this.fn_GetTraineeList();
      }
      else{
        this.toastr.error("Failed to delete aspirant details");
      }
    });
  }

 
}