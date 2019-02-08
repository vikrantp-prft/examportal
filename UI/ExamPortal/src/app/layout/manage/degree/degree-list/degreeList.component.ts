import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { commonService } from 'src/app/common/services/common.service';
import { Http } from '@angular/http';
import swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
interface paginationModel {
  currentPage: number;
  pageSize: number;
  searchString: string;
}

@Component({
  selector: 'degree-list',
  templateUrl: './degreeList.html',
  providers: [commonService]
})
export class DegreeListComponent implements OnInit {
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
  public degreeList = [];
  public degreeInfo: any;
  public statusUrl: any;

  public degreeModel =
       {
         "condition": "Degree",
         "pageSize": 10,
         "pageNumber": 1
       };
  editDegreeList: any;
  

  // Constructor

  constructor(public router: Router, private CommonService: commonService, public http: Http, private toastr: ToastrService) {}
  
  // Lifecycle method

  ngOnInit() {
    this.fn_GetDegreeList();
  }

  degreeForm = new FormGroup({
    degreeTitle: new FormControl('', Validators.required),
    degreeDescription: new FormControl('', [Validators.required])
  });
  get degreeTitle() {
    return this.degreeForm.get('degreeTitle');
  }
  get degreeDescription() {
    return this.degreeForm.get('degreeDescription');
  }
  frmReset() {
    this.degreeForm.reset();
  }

  fn_saveDegree(data) {
    if (this.degreeForm.invalid) {
      this.degreeForm.setErrors({
        Validators
      })
    }
    const url = 'api/Master';
    const degreeModel =
    {
      // firstName: this.employeeForm.controls.firstName.value,
      name: data.value.degreeTitle,
      isActive: true,
      description: data.value.degreeDescription,
      masterType: "Degree"
    }
    this.fn_saveDegreefun(url, degreeModel);
  }
  // function for save degree details.
  fn_saveDegreefun(url, data) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      // debugger;
      // console.log(result);
      const rs = result;
      if (rs.statusCode == 200) {
        this.toastr.success('Degree  added successfully!');
        this.fn_GetDegreeList();
      }
      else {
        this.toastr.success('Failed to add degree');
      }
    });
  }

  // Get designation by id
  fn_GetDegreeById(ID) {
    const url = 'api/Master/GetMasterById';
    const degreeModel =
    {
      "id": ID,
      "pageSize": 10,
      "pageNumber": 1,
      "totleRecords": 0,
      "filter": "string",
      "sortBy": "string",
      "isDescending": true
    };
    this.CommonService.fn_PostWithData(degreeModel, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.editDegreeList = rs.data;
        this.fn_setEditValues();
      }
      else {
      }
    });
  }
  // default values
  fn_setEditValues() {
    // this.categoryForm.controls.id.setValue(this.examID);
    this.degreeForm.controls.degreeTitle.setValue(this.editDegreeList.name);
    this.degreeForm.controls.degreeDescription.setValue(this.editDegreeList.description);
  }

  fn_updateDegree(data) {
    const url = 'api/Master/Update';
    const degreeModel =
    {
      id: this.editDegreeList.id,
      name: data.value.degreeTitle,
      description: data.value.degreeDescription,
      masterType: "Degree"
    }
    this.fn_updateDegreefun(url, degreeModel);
  }
  // function for save degree details.
  fn_updateDegreefun(url, data) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.toastr.success('Degree  updated successfully!');
        this.fn_GetDegreeList();
      }
      else {
        this.toastr.success('Failed to update degree');
      }
    });
  }

  
  // Function for  pagination
  setRecordPerPage(event: any): void {
    this.degreeModel.pageNumber = 1;
    this.degreeModel.pageSize = event.target.value;
    this.fn_GetDegreeList();
  }
  pageChanged(event: any): void {
    this.degreeModel.pageNumber = event.page;
    this.fn_GetDegreeList();
  }

  trimming_fn(x) {
    return x ? x.replace(/^\s+|\s+$/gm, '') : '';
  }; 

  
  // Searching
  searchRecord(event: any): void {
    const searchModel=
      {
        "id": "string",
        "condition": "Degree",
        "pageSize": 10,
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
        this.degreeList = rs.data;
        // this.totalItems = rs.totalRecords;
      }
      else {
      }
    });
  }

  
  // Function to get degreeList (GetMasterByType)
  fn_GetDegreeList() {
    // const prop: paginationModel = {
    //   currentPage: parseInt(this.params.currentPage),
    //   pageSize: parseInt(this.params.pageSize),
    //   searchString: this.params.searchString
    // };
    const url = 'api/Master/GetMasterByType';
    
    this.CommonService.fn_PostWithData(this.degreeModel, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.degreeList = rs.data;
        this.totalItems = rs.totalRecords;
      }
      else {
      }
      }); 
  }

  
  fn_deleteDegree(Id) {
    if (Id != null) {
      swal({
        title: 'Are you sure?',
        text: 'You want to delete the Degree!',
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
          this.fn_delDegreeFun(url, model);
        }
      });
     
    }
  }

  
  // function for soft deleting degree.
  fn_delDegreeFun(url, data) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if ((rs.message == 'Success')) {
        this.toastr.success('Degree\'s details deleted successfully!');
        this.fn_GetDegreeList();
      }
      else{
        this.toastr.error("Failed to delete degree");
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
        const degreeStatusModel = {
          "id": id,
         }
        this.fn_saveStatusChange(this.statusUrl,degreeStatusModel);
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
          this.fn_GetDegreeList();
      }
      else {
          
      }
  });
  }


}
