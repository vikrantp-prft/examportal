import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { commonService } from 'src/app/common/services/common.service';
import { Http } from '@angular/http';
import swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'exam-list',
  templateUrl: './examList.html',
  styleUrls: ['./examList.component.css'],
  providers: [commonService]
})
export class ExamListComponent implements OnInit {
  // Declaration
  public params: any = {
    pageNumber: 1,
    pageSize: 10,
    filter: ''
  };
  public i: Number = 0;
  public startrecordno: Number = 1;
  public endrecord: Number = 1;
  public recordno = 0;
  public totalItems = 0;
  public examList = [];
  public statusUrl: string;
  
  // Constructor
  constructor(
    private ngxService: NgxUiLoaderService, 
    public router: Router, 
    private CommonService: commonService, 
    public http: Http, private toastr: ToastrService) { }

  // Lifecycle method
  ngOnInit() {
    this.fn_GetExamList();
  }

  // Function for  pagination
  setRecordPerPage(event: any): void {
    this.params.pageNumber = 1;
    this.params.pageSize = event.target.value;
    this.fn_GetExamList();
  }
  pageChanged(event: any): void {
    this.params.pageNumber = parseInt(event.page);
    this.params.pageSize = parseInt(event.itemsPerPage);
    this.fn_GetExamList();
  }
  // Searching
  searchRecord(event: any): void {
    if (event.keyCode == 13) {
      this.params.pageNumber = 1;
      this.params.pageSize = 10;
      this.params.filter = event.target.value;
      this.fn_GetExamList();
    }
  }
  // Function to get list of Exam
  fn_GetExamList() {
    this.ngxService.start();
    const url = 'api/Exams/GetExams';
    this.CommonService.fn_PostWithData(this.params, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.examList = rs.data;
        this.totalItems = rs.totalRecords;
        this.ngxService.stop();
      }
    });
  }
  // function to display the alert before deleting the Order.
  fn_deleteExam(Id) {
    if (Id != null) {
      swal({
        title: 'Are you sure?',
        text: 'You want to delete the Exam!',
        buttonsStyling: true,
        confirmButtonClass: 'btn btn-success',
        showCancelButton: true,
        cancelButtonClass: 'btn btn-danger',
        confirmButtonText: 'Yes, delete it!'
      }).then(x => {
        if (x.value == true) {
          const deleteExamUrl = 'api/Exams/deleteExam';
          const model = {
            id: ''
          };
          model.id = Id;
          this.fn_delfun(deleteExamUrl, model);
        }
      });
    }
  }
  // function for soft deleting the Exam.
  fn_delfun(url, data) {
    this.ngxService.start();
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.toastr.success('Exam deleted successfully!');
        this.fn_GetExamList();
        this.ngxService.stop();
      }
      else {
        this.toastr.success('Failed to Delete Exam');
      }
    });
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
          this.statusUrl = "api/Exams/InactivateExam";
          this.toastr.success("Exam inactivated");
        } else {
          this.statusUrl = "api/Exams/ActiveExam";
          this.toastr.success("Exam activated");
        }
        const examStatusModel = {
          id: id
        };
        this.fn_saveStatusChange(this.statusUrl, examStatusModel);
      }
    });
  }

  //function to save status change
  fn_saveStatusChange(url, data) {
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.fn_GetExamList();
      } else {
      }
    });
  }

}
