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
  selector: 'category-list',
  templateUrl: './categorylist.html',
  providers: [commonService]
})
export class CategoryListComponent implements OnInit {
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
  public categoryList = [];

  // Constructor

  constructor(public router: Router, private CommonService: commonService, public http: Http, private toastr: ToastrService) {}
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  // Lifecycle method

  ngOnInit() {
    this.fn_GetCategoryList();
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
  searchRecord(event: any): void {}

  fn_GetCategoryList() {
    const prop: paginationModel = {
      currentPage: parseInt(this.params.currentPage),
      pageSize: parseInt(this.params.pageSize),
      searchString: this.params.searchString
    };
    const url = 'api/Dropdown/Departments';

    this.CommonService.fn_Get(url).subscribe(
      (data: any) => {
        // if (data != null && data.statusCode === 200) {
        this.categoryList = data.data;
      },
      err => console.error(err),
      () => {}
    );
  }
}
