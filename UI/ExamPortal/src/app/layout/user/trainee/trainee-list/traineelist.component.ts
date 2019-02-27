import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { commonService } from 'src/app/common/services/common.service';

interface paginationModel {
  currentPage: number;
  pageSize: number;
  searchString: string;
}

@Component({
  selector: 'trainee-list',
  templateUrl: './traineeList.html',
  providers: [commonService]

})
export class TraineeListComponent implements OnInit {

  public traineeModel: any = {
    "totalRecords": 0,
    "pageSize": 10,
    "pageNumber": 1
  }

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
  public traineeList = [];

  constructor(private CommonService: commonService) { }
  // Function for  pagination
  setRecordPerPage(event: any): void {
    this.traineeModel.pageNumber = 1;
    this.traineeModel.pageSize = event.target.value;
    this.fn_GetTraineeList();
  }
  pageChanged(event: any): void {
    this.traineeModel.pageNumber = parseInt(event.page);
    this.traineeModel.pageSize = parseInt(event.itemsPerPage);
    this.fn_GetTraineeList();
  }
  // Searching
  searchRecord(event: any): void {
    if (event.keyCode == 13) {
      this.traineeModel.pageNumber = 1;
      this.traineeModel.pageSize = 10;
      this.traineeModel.filter = event.target.value;
      this.fn_GetTraineeList();
    }
  }
  ngOnInit() {
    this.fn_GetTraineeList();
  }

  fn_GetTraineeList() {
    
    const url = 'api/Aspirants/GetAspirants';

    this.CommonService.fn_PostWithData(this.traineeModel, url).subscribe(
      (data: any) => {        
          console.log(data);
          this.traineeList = data.data;
          console.log(this.traineeList);
        },
      err => console.error(err),
      () => { }
    );
  }

 
}