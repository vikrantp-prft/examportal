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
  selector: 'team-list',
  templateUrl: './teamList.html',
  providers: [commonService]
})
export class TeamListComponent implements OnInit {
  // Declaration
  public params: any = {
    currentPage: 1,
    pageSize: 10,
    filter: ''
  };
  public i: Number = 0;
  public startrecordno: Number = 1;
  public endrecord: Number = 1;
  public recordno = 0;
  public totalItems = 0;
  public teamList = [];
  public teamInfo: any;
  public statusUrl: any;
  public teamModel =
    {
      "condition": "Team",
      "pageSize": 10,
      "pageNumber": 1
    };
  editTeamList: any;
  // Constructor
  constructor(public router: Router, private CommonService: commonService, public http: Http, private toastr: ToastrService) { }
  // Lifecycle method
  ngOnInit() {
    this.fn_GetTeamList();
  }
  teamForm = new FormGroup({
    teamTitle: new FormControl('', Validators.required),
    teamDescription: new FormControl('', Validators.required),
    teamisActive: new FormControl('')
  });
  get teamTitle() {
    return this.teamForm.get('teamTitle');
  }
  get teamDescription() {
    return this.teamForm.get('teamDescription');
  }
  frmReset() {
    this.teamForm.reset();
  }
  // function to save Team details
  fn_saveTeam(data) {
    const url = 'api/Master';
    const teamModel =
    {
      name: data.value.teamTitle,
      isActive: true,
      description: data.value.teamDescription,
      masterType: "Team"
    }
    this.fn_saveTeamfun(url, teamModel);
  }
  fn_saveTeamfun(url, data) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      // debugger;
      // console.log(result);
      const rs = result;
      if (rs.statusCode == 200) {
        this.toastr.success('Team added successfully!');
        this.fn_GetTeamList();
      }
      else {
        this.toastr.success('Failed to add team');
      }
    });
  }

  // Get Team by Id
  fn_GetTeamById(ID) {
    const url = 'api/Master/GetMasterById';
    const categoryModel =
    {
      "id": ID,
      "pageSize": 0,
      "pageNumber": 0,
      "totleRecords": 0,
      "filter": "string",
      "sortBy": "string",
      "isDescending": true
    };
    this.CommonService.fn_PostWithData(categoryModel, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.editTeamList = rs.data;
        this.fn_setEditValues();
      }
      else {
      }
    });
  }
  // default values
  fn_setEditValues() {
    // this.categoryForm.controls.id.setValue(this.examID);
    this.teamForm.controls.teamTitle.setValue(this.editTeamList.name);
    this.teamForm.controls.teamDescription.setValue(this.editTeamList.description);
  }
  // Update Team
  fn_updateTeam(data) {
    const url = 'api/Master/Update';
    const teamModel =
    {
      id: this.editTeamList.id,
      name: data.value.teamTitle,
      description: data.value.teamDescription,
      masterType: "Team"
    }
    this.fn_updateTeamfun(url, teamModel);
  }
  // function for save team details.
  fn_updateTeamfun(url, data) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.toastr.success('Team  updated successfully!');
        this.fn_GetTeamList();
      }
      else {
        this.toastr.success('Failed to update team');
      }
    });
  }
  // Function for  pagination
  setRecordPerPage(event: any): void {
    this.teamModel.pageNumber = 1;
    this.teamModel.pageSize = event.target.value;
    this.fn_GetTeamList();
  }
  pageChanged(event: any): void {
    this.teamModel.pageNumber = event.page;
    this.fn_GetTeamList();
  }
  trimming_fn(x) {
    return x ? x.replace(/^\s+|\s+$/gm, '') : '';
  };
  // Searching
  searchRecord(event: any): void {
    const searchModel =
    {
      "id": "string",
      "condition": "Team",
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
        this.teamList = rs.data;
        // this.totalItems = rs.totalRecords;
      }
      else {
      }
    });
  }
  // Function to get teamList (GetMasterByType)
  fn_GetTeamList() {
    const url = 'api/Master/GetMasterByType';
    this.CommonService.fn_PostWithData(this.teamModel, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.teamList = rs.data;
        this.totalItems = rs.totalRecords;
      }
      else {
      }
    });
  }
  //Delete Team
  fn_deleteTeam(Id) {
    if (Id != null) {
      swal({
        title: 'Are you sure?',
        text: 'You want to delete the Team!',
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
          this.fn_delTeamFun(url, model);
        }
      });
    }
  }
  // function for soft deleting the Ad Team
  fn_delTeamFun(url, data) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if ((rs.message == 'Success')) {
        this.toastr.success('Team\'s details deleted successfully!');
        this.fn_GetTeamList();
      }
      else {
        this.toastr.error("Failed to delete team");
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
        const teamStatusModel = {
          "id": id,
        }
        this.fn_saveStatusChange(this.statusUrl, teamStatusModel);
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
        this.fn_GetTeamList();
      }
      else {
        console.log("Something is wrong.")
      }
    });
  }
}
