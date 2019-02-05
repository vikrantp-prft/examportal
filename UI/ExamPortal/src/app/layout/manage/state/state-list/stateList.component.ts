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
  selector: 'state-list',
  templateUrl: './stateList.html',
  providers: [commonService]
})
export class StateListComponent implements OnInit {
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
  public stateList = [];
  public stateInfo: any;
  public statusUrl: any;

  public stateModel =
  {
    "condition": "State",
    "pageSize": 10,
    "pageNumber": 1
  };
  

  // Constructor

  constructor(public router: Router, private CommonService: commonService, public http: Http, private toastr: ToastrService) {}
  
  // Lifecycle method

  ngOnInit() {
    this.fn_GetStateList();
  }

  
  // Function for  pagination
  setRecordPerPage(event: any): void {
    this.stateModel.pageNumber = 1;
    this.stateModel.pageSize = event.target.value;
    this.fn_GetStateList();
  }
  pageChanged(event: any): void {
    this.stateModel.pageNumber = event.page;
    this.fn_GetStateList();
  }

  trimming_fn(x) {
    return x ? x.replace(/^\s+|\s+$/gm, '') : '';
  }; 
  
  // Searching
  searchRecord(event: any): void {
    const searchModel=
      {
        "id": "string",
        "condition": "State",
        "pageSize": 0,
        "pageNumber": 0,
        "totalRecords": 0,
        "filter": this.trimming_fn(event.target.value),
        "sortBy": "string",
        "isDescending": true
      }
      this.fn_GetFilteredList(searchModel);
  }

  fn_GetFilteredList(data) {
    const url = 'api/Master/GetMasterByType';
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.stateList = rs.data;
        // this.totalItems = rs.totalRecords;
      }
      else {
      }
    });
  }

  
  // Function to get stateList (GetMasterByType)
  fn_GetStateList() {
    // const prop: paginationModel = {
    //   currentPage: parseInt(this.params.currentPage),
    //   pageSize: parseInt(this.params.pageSize),
    //   searchString: this.params.searchString
    // };
    const url = 'api/Master/GetMasterByType';
   
    this.CommonService.fn_PostWithData(this.stateModel, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.stateList = rs.data;
        this.totalItems = rs.totalRecords;
      }
      else {
      }
      }); 
  }

  
  fn_deleteState(Id) {
    if (Id != null) {
      swal({
        title: 'Are you sure?',
        text: 'You want to delete the State!',
        buttonsStyling: true,
        confirmButtonClass: 'btn btn-success',
        showCancelButton: true,
        cancelButtonClass: 'btn btn-danger',
        confirmButtonText: 'Yes, delete it!'
      }).then(x => {
       
        if (x.value == true) {
          const url = 'api/Master/DeleteMaster';
          const model = {
            id: ''
          };
          model.id = Id;
          this.fn_delStateFun(url, model);
        }
      });
     
    }
  }

  
  // function for soft deleting state.
  fn_delStateFun(url, data) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if ((rs.message == 'Success')) {
        this.toastr.success('State\'s details deleted successfully!');
        this.fn_GetStateList();
      }
      else{
        this.toastr.error("Failed to delete state");
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
        const stateStatusModel = {
          "id": id,
         }
        this.fn_saveStatusChange(this.statusUrl,stateStatusModel);
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
          this.fn_GetStateList();
      }
      else {
          
      }
  });
  }


}
