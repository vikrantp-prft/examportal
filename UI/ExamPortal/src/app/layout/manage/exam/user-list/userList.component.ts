import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";
import { commonService } from "src/app/common/services/common.service";
import { Http } from "@angular/http";
import swal from "sweetalert2";
import { ToastrService } from "ngx-toastr";
import { NgxUiLoaderService } from "ngx-ui-loader";
@Component({
  selector: "user-list",
  templateUrl: "./userList.html",
  providers: [commonService]
})
export class UserListComponent implements OnInit {
  public userModel: any = {
    id: "",
    totalRecords: 0,
    pageSize: 10,
    pageNumber: 1
  };
  public userList: any[];
  public examID: any;
  public selectAll: boolean;
  public index: any;

  // Declaration
  public params: any = {
    pageNumber: 1,
    pageSize: 10,
    filter: ""
  };

  public i: Number = 0;
  public startrecordno: Number = 1;
  public endrecord: Number = 1;
  public recordno = 0;
  public totalItems = 0;
  public examList = [];
  public teamArray: any;

  // Constructor
  constructor(
    private ngxService: NgxUiLoaderService,
    public router: Router,
    private route: ActivatedRoute,
    private CommonService: commonService,
    public http: Http,
    private toastr: ToastrService
  ) {
    this.route.params.subscribe(params => {
      this.examID = params["examId"];
    });
  }

  // Lifecycle method
  ngOnInit() {
    this.userModel.id = this.examID;
    this.fn_GetUserList();
    this.fn_getTeam();
  }

  // Function for  pagination
  setRecordPerPage(event: any): void {
    this.userModel.id = this.examID;
    this.userModel.pageNumber = 1;
    this.userModel.pageSize = event.target.value;
    this.fn_GetUserList();
  }
  pageChanged(event: any): void {
    this.userModel.id = this.examID;
    this.userModel.pageNumber = parseInt(event.page);
    this.userModel.pageSize = parseInt(event.itemsPerPage);
    this.fn_GetUserList();
  }

   // Searching
   searchRecord(event: any): void {
    if (event.keyCode == 13) {
      this.userModel.pageNumber = 1;
      this.userModel.pageSize = 10;
      this.userModel.filter = event.target.value;
      this.fn_GetUserList();
    }
  }

  searchTeam(event: any): void {
    console.log(event.target.value);
      this.userModel.pageNumber = 1;
      this.userModel.pageSize = 10;
      this.userModel.filter = event.target.value;
      this.fn_GetUserList();
     
      // const filterTeam = event.target.value;
      // console.log(filterTeam);
      // console.log(this.userList);
    
      // const a = this.userList.filter(function(user) {
      //   console.log(user);
      //   return filterTeam === user.team.name
      // });
      // console.log(a);
      // //console.log(this.userList);
  }

   // function to get teams
   fn_getTeam() {
    const teamUrl = "api/Dropdown/Teams";
    this.ngxService.start();
    this.CommonService.fn_Get(teamUrl).subscribe((result: any) => {
      const teamResult = result;
      if (teamResult.statusCode === 200) {
        this.teamArray = teamResult.data;
        this.ngxService.stop();
      } else {
        this.teamArray = null;
      }
    });
  }

  // Function to get list of users
  fn_GetUserList() {
    this.ngxService.start();
    const url = "api/AssignedExams/ListEmployeesByExamId"; //'api/Employee/GetEmployees'
    this.CommonService.fn_PostWithData(this.userModel, url).subscribe(
      (data: any) => {
        this.userList = data.data;
        this.ngxService.stop();
        this.userModel.totalRecords = data.totalRecords;
      },
      err => console.error(err),
      () => {}
    );
  }

  fn_isAssign(event, id) {
    const examAssignedUrl = "api/AssignedExams/ExamAssignment";
    if (event.target.checked) {
      const assignExam = [
        {
          examId: this.examID,
          userId: id,
          isAttempted: false,
          isActive: true
        }
      ];
      this.fn_examAssignment(assignExam, examAssignedUrl);
    } else {
      const unAssignExam = [
        {
          examId: this.examID,
          userId: id,
          isAttempted: false,
          isActive: false
        }
      ];
      this.fn_examAssignment(unAssignExam, examAssignedUrl);
    }
  }

  fn_examAssignment(data, url) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      console.log(rs)
      if (rs.statusCode == 200) {
        if (data[0].isActive) this.toastr.success("Exam assigned successfully!");
        else this.toastr.success("Exam unassigned successfully!");
      } else {
        this.toastr.error("Failed to assign exam");
      }
    });
  }
 
  // assign exam to all users (selected users)
  fn_isSelect(event)
  {
    const examAssignedUrl = "api/AssignedExams/ExamAssignment";
    if (event.target.checked) {
      console.log(this.userList);
      this.selectAll = true;
      const assignExam = [];
      for (const user of this.userList) {
        console.log(user);
        assignExam.push({
          examId: this.examID,
          userId: user.id,
          isAttempted: false,
          isActive: true
        });
      }
      console.log(assignExam);
      this.fn_examAssignment(assignExam, examAssignedUrl);
    }
    else {
      this.selectAll = false;
      const unassignExam = [];
      for (const user of this.userList) {
        console.log(user);
        unassignExam.push({
          examId: this.examID,
          userId: user.id,
          isAttempted: false,
          isActive: false
        });
      }
      console.log(unassignExam);
      this.fn_examAssignment(unassignExam, examAssignedUrl);
    }
  }
}
