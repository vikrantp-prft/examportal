import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";
import { commonService } from "src/app/common/services/common.service";
import { Http } from "@angular/http";
import swal from "sweetalert2";
import { ToastrService } from "ngx-toastr";
import { NgxUiLoaderService } from "ngx-ui-loader";
@Component({
  selector: "result-list",
  templateUrl: "./resultList.html",
  providers: [commonService]
})
export class ResultListComponent implements OnInit {
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
    this.fn_GetResultList();
  }

  // Function for  pagination
  setRecordPerPage(event: any): void {
    this.userModel.id = this.examID;
    this.userModel.pageNumber = 1;
    this.userModel.pageSize = event.target.value;
  }
  pageChanged(event: any): void {
    this.userModel.id = this.examID;
    this.userModel.pageNumber = parseInt(event.page);
    this.userModel.pageSize = parseInt(event.itemsPerPage);
  }

  // Function to get list of users
  fn_GetResultList() {
    this.ngxService.start();
    const url = "api/Results/listResultsByExamId"; 
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

  

  
}
