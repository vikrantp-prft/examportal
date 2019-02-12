import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { commonService } from 'src/app/common/services/common.service';
import { Http } from '@angular/http';
import swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
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
  public statusUrl: any;
  public designationModel =
    {
      "condition": "Designation",
      "pageSize": 10,
      "pageNumber": 1
    };
  editDesignationList: any;
  // Constructor
  constructor(
    private ngxService: NgxUiLoaderService, 
    public router: Router,
    private CommonService: commonService,
    public http: Http, private toastr: ToastrService) {
  }
  // Lifecycle method
  ngOnInit() {
    this.fn_GetDesignationList();
  }
  designationForm = new FormGroup({
    designationTitle: new FormControl('', Validators.required),
    designationDescription: new FormControl('', [Validators.required])
  });
  get designationTitle() {
    return this.designationForm.get('designationTitle');
  }
  get designationDescription() {
    return this.designationForm.get('designationDescription');
  }
  frmReset() {
    this.designationForm.reset();
  }
  fn_saveDesignation(data) {
    if (this.designationForm.invalid) {
      this.designationForm.setErrors({
        Validators
      })
    }
    const url = 'api/Master';
    const designationModel =
    {
      // firstName: this.employeeForm.controls.firstName.value,
      name: data.value.designationTitle,
      isActive: true,
      description: data.value.designationDescription,
      masterType: "Designation"
    }
    console.log(designationModel);
    this.fn_saveDesignationfun(url, designationModel);
  }
  // function for save employee details.
  fn_saveDesignationfun(url, data) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      // debugger;
      // console.log(result);
      const rs = result;
      if (rs.statusCode == 200) {
        this.toastr.success('Designation  added successfully!');
        this.fn_GetDesignationList();
      }
      else {
        this.toastr.success('Failed to add designation');
      }
    });
  }
  // Get designation by id
  fn_GetDesignationById(ID) {
    const url = 'api/Master/GetMasterById';
    const designationModel =
    {
      "id": ID,
      "pageSize": 0,
      "pageNumber": 0,
      "totleRecords": 0,
      "filter": "string",
      "sortBy": "string",
      "isDescending": true
    };
    this.CommonService.fn_PostWithData(designationModel, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.editDesignationList = rs.data;
        this.fn_setEditValues();
      }
      else {
      }
    });
  }
  // default values
  fn_setEditValues() {
    // this.categoryForm.controls.id.setValue(this.examID);
    this.designationForm.controls.designationTitle.setValue(this.editDesignationList.name);
    this.designationForm.controls.designationDescription.setValue(this.editDesignationList.description);
  }
  // Submit category
  fn_updateDesignation(data) {
    const url = 'api/Master/Update';
    const designationModel =
    {
      id: this.editDesignationList.id,
      name: data.value.designationTitle,
      description: data.value.designationDescription,
      masterType: "Designation"
    }
    console.log(designationModel)
    this.fn_updateDesignationfun(url, designationModel);
  }
  // function for save category details.
  fn_updateDesignationfun(url, data) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.toastr.success('Designation  updated successfully!');
        this.fn_GetDesignationList();
      }
      else {
        this.toastr.success('Failed to update designation');
      }
    });
  }
  // Function for  pagination
  setRecordPerPage(event: any): void {
    this.designationModel.pageNumber = 1;
    this.designationModel.pageSize = event.target.value;
    this.fn_GetDesignationList();
  }
  pageChanged(event: any): void {
    this.designationModel.pageNumber = event.page;
    this.fn_GetDesignationList();
  }
  trimming_fn(x) {
    return x ? x.replace(/^\s+|\s+$/gm, '') : '';
  };
  // Searching
  searchRecord(event: any): void {
    const searchModel =
    {
      "id": "string",
      "condition": "Designation",
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
        this.designationList = rs.data;
        // this.totalItems = rs.totalRecords;
      }
      else {
      }
    });
  }
  // Function to get list of employees
  fn_GetDesignationList() {
    this.ngxService.start()
    const url = 'api/Master/GetMasterByType';
    this.CommonService.fn_PostWithData(this.designationModel, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.ngxService.stop();
        this.designationList = rs.data;
        this.totalItems = rs.totalRecords;
      }
      else {
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
        if (x.value == true) {
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
      else {
        this.toastr.error("Failed to delete designation");
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
        const designationStatusModel = {
          "id": id,
        }
        this.fn_saveStatusChange(this.statusUrl, designationStatusModel);
      }
    });
  }
  //function to save status change
  fn_saveStatusChange(url, data) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.fn_GetDesignationList();
      }
      else {
        console.log("Something is wrong.")
      }
    });
  }
}
