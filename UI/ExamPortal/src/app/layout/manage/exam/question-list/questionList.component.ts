import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
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
  selector: 'question-list',
  templateUrl: './questionList.html',
  providers: [commonService]
})
export class questionListComponent implements OnInit {
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
  public questionList = [];
  public examID = "";
  public questionListUrl = 'api/Questions/listQuestionsByExamId';

  constructor(private route: ActivatedRoute, public router: Router, private CommonService: commonService, public http: Http, private toastr: ToastrService) {
    this.route.params.subscribe(params => {
      this.examID = params['id'];
    });
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  ngOnInit() {
    this.fn_GetQuestionsList();
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

  fn_GetQuestionsList() {
    const prop: paginationModel = {
      currentPage: parseInt(this.params.currentPage),
      pageSize: parseInt(this.params.pageSize),
      searchString: this.params.searchString
    };
    const questionModel =
    {
      "id": this.examID,
      "filter": "string",
      "pageSize": 0,
      "pageNumber": 0,
      "totleRecords": 0,
      "filterBy": "string",
      "sortBy": "string",
      "isDescending": true
    }
    this.CommonService.fn_PostWithData(questionModel, this.questionListUrl).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.questionList = rs.data;
      }
      else {
      }
    });
  }

  // FUnction to get employee ID
  fn_getEmployee(empid) { }
  // function to display the alert before deleting the Order.
  fn_deleteEmployee(Id) {
    if (Id != null) {
      swal({
        title: 'Are you sure?',
        text: 'You want to delete the Employee!',
        buttonsStyling: true,
        confirmButtonClass: 'btn btn-success',
        showCancelButton: true,
        cancelButtonClass: 'btn btn-danger',
        confirmButtonText: 'Yes, delete it!'
      }).then(x => {
        if (x.value = true) {
          const url = 'api/User/InactivateUser';
          const model = {
            id: ''
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
      if ((result.message = 'Success')) {
        this.toastr.success('Employee details deleted successfully!');
        this.fn_GetQuestionsList();
      }
    });
  }
}
