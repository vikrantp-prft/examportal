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
      if (rs.statusCode == 200) {
        if (data.isActive) this.toastr.success("Exam assigned successfully!");
        else this.toastr.success("Exam unassigned successfully!");
      } else {
        this.toastr.error("Failed to assign exam");
      }
    });
  }
}
