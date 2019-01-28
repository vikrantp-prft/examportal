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
  selector: 'exam-list',
  templateUrl: './examList.html',
  providers: [commonService]
})
export class ExamListComponent implements OnInit {
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
  public examList = [];

  // Constructor

  constructor(public router: Router, private CommonService: commonService, public http: Http, private toastr: ToastrService) { }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  // Lifecycle method

  ngOnInit() {
    this.fn_GetExamList();
  }

  // Function for  pagination
  setRecordPerPage(event: any): void {
    this.params.currentPage = 1;
    this.params.pageSize = event.target.value;
  }
  pageChanged(event: any): void {
    this.params.currentPage = parseInt(event.page);
    this.params.pageSize = parseInt(event.itemsPerPage);
  }
  // Searching
  searchRecord(event: any): void { }

  // Function to get list of employees

  fn_GetExamList() {
    const prop: paginationModel = {
      currentPage: parseInt(this.params.currentPage),
      pageSize: parseInt(this.params.pageSize),
      searchString: this.params.searchString
    };
    const url = 'api/Exams';

    this.CommonService.fn_Get(url).subscribe(
      (data: any) => {
        // if (data != null && data.statusCode === 200) {
        this.examList = data.data;
      },
      err => console.error(err),
      () => { }
    );
  }

  // FUnction to get employee ID
  fn_getEmployee(empid) { }
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
          const deleteExamUrl = 'api/Exam/deleteExam';
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
    this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
      const rs = result;
      if ((result.message = 'Success')) {
        this.toastr.success('Exam deleted successfully!');
        this.fn_GetExamList();
      }
    });
  }
}
