import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { commonService } from 'src/app/common/services/common.service';
import { Http } from '@angular/http';
import swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
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
  public editStateList: any;
  public stateModel =
    {
      "condition": "State",
      "pageSize": 10,
      "pageNumber": 1
    };
  // Constructor
  constructor(
    private ngxService: NgxUiLoaderService, 
    public router: Router, 
    private CommonService: commonService, 
    public http: Http, 
    private toastr: ToastrService) { }
  // Lifecycle method
  ngOnInit() {
    this.fn_GetStateList();
  }
  stateForm = new FormGroup({
    stateTitle: new FormControl('', Validators.required),
    stateDescription: new FormControl('')
  });
  get stateTitle() {
    return this.stateForm.get('stateTitle');
  }
  get stateDescription() {
    return this.stateForm.get('stateDescription');
  }
  frmReset() {
    this.stateForm.reset();
  }
  // Add State details
  fn_saveState(data) {
    const url = 'api/Master';
    const stateModel =
    {
      name: data.value.stateTitle,
      isActive: true,
      description: data.value.stateDescription,
      masterType: "State"
    }
    this.fn_saveStatefun(url, stateModel);
  }
  // function for save employee details.
  fn_saveStatefun(url, data) {
    this.ngxService.start();
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.toastr.success('State  added successfully!');
        this.fn_GetStateList();
        this.frmReset();
        this.ngxService.stop();
      }
      else {
        this.toastr.success('Failed to add state');
      }
    });
  }
  // Get state by id
  fn_GetStateById(ID) {
    const url = 'api/Master/GetMasterById';
    const stateModel =
    {
      "id": ID,
      "pageSize": 0,
      "pageNumber": 0,
      "totleRecords": 0,
      "filter": "string",
      "sortBy": "string",
      "isDescending": true
    };
    this.fn_GetStateByIdFun(url, stateModel);
  }
  fn_GetStateByIdFun(url, model){
    this.ngxService.start();
    this.CommonService.fn_PostWithData(model, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.editStateList = rs.data;
        this.ngxService.stop();
        this.fn_setEditValues();
      }
    });
  }
  // default values
  fn_setEditValues() {
    this.stateForm.controls.stateTitle.setValue(this.editStateList.name);
    this.stateForm.controls.stateDescription.setValue(this.editStateList.description);
  }
  // Update state
  fn_updateState(data) {
    const url = 'api/Master/Update';
    const stateModel =
    {
      id: this.editStateList.id,
      name: data.value.stateTitle,
      description: data.value.stateDescription,
      masterType: "State"
    }
    this.fn_updateStatefun(url, stateModel);
  }
  // function for save state details.
  fn_updateStatefun(url, data) {
    this.ngxService.start();
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.ngxService.stop();
        this.toastr.success('State  updated successfully!');
        this.fn_GetStateList();
      }
      else {
        this.toastr.success('Failed to update state');
      }
    });
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
    const url = 'api/Master/GetMasterByType';
    const searchModel =
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
    this.fn_GetFilteredList(url, searchModel);
  }
  fn_GetFilteredList(url, data) {
    this.ngxService.start();
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.stateList = rs.data;
        this.ngxService.stop();
      }
    });
  }
  // Function to get stateList (GetMasterByType)
  fn_GetStateList() {
    this.ngxService.start();
    const url = 'api/Master/GetMasterByType';
    this.CommonService.fn_PostWithData(this.stateModel, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.stateList = rs.data;
        this.totalItems = rs.totalRecords;
        this.ngxService.stop();
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
    this.ngxService.start();
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if ((rs.message == 'Success')) {
        this.toastr.success('State\'s details deleted successfully!');
        this.fn_GetStateList();
        this.ngxService.stop();
      }
      else {
        this.toastr.error("Failed to delete state");
      }
    });
  }
  // function to change isActive status
  fn_ChangeStatus(id, isActive) {
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
          this.statusUrl = 'api/Master/InactivateMaster';
        }
        else {
          this.statusUrl = 'api/Master/ActivateMaster';
        }
        const stateStatusModel = {
          "id": id,
        }
        this.fn_saveStatusChange(this.statusUrl, stateStatusModel);
      }
    });
  }
  //function to save status change
  fn_saveStatusChange(url, data) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      this.ngxService.start();
      const rs = result;
      if (rs.statusCode == 200) {
        this.toastr.success('State\'s status changes successfully!');
        this.fn_GetStateList();
        this.ngxService.stop();
      }
      else {
        this.toastr.success('Failed to change state\'s status');
      }
    });
  }
}
