import { Component, OnInit } from '@angular/core';
import { commonService } from 'src/app/common/services/common.service';
import { ToastrService } from 'ngx-toastr';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import swal from 'sweetalert2';

@Component({
    selector: 'contributor-list',
    templateUrl: './contributorList.html',
    providers: [commonService]
})
export class ContributorListComponent implements OnInit {

    public contributorModel: any = {
        totalRecords: 0,
        pageSize: 10,
        pageNumber: 1
      };

    public contributorList: any;
    public statusUrl: string;

    constructor(
        private ngxService: NgxUiLoaderService,
        public router: Router,
        private CommonService: commonService,
        public http: Http,
        private toastr: ToastrService
        )  { }

    ngOnInit(): void {
        this.fn_GetContributorList();
     }

     // Function for  pagination
    setRecordPerPage(event: any): void {
        this.contributorModel.pageNumber = 1;
        this.contributorModel.pageSize = event.target.value;
        this.fn_GetContributorList();
    }

    pageChanged(event: any): void {
        this.contributorModel.pageNumber = parseInt(event.page);
        this.contributorModel.pageSize = parseInt(event.itemsPerPage);
        this.fn_GetContributorList();
    }

    // Searching
    searchRecord(event: any): void {
        if (event.keyCode == 13) {
        this.contributorModel.pageNumber = 1;
        this.contributorModel.pageSize = 10;
        this.contributorModel.filter = event.target.value;
        this.fn_GetContributorList();
        }
    }

    // Function to get list of contributor
    fn_GetContributorList() {
        this.ngxService.start();
        const url = "api/User/GetContributors";
        this.CommonService.fn_PostWithData(this.contributorModel, url).subscribe(
        (data: any) => {
            this.contributorList = data.data;
            this.contributorModel.totalRecords = data.totalRecords;
            this.ngxService.stop();
        },
        err => console.error(err),
        () => {}
        );
    }

    fn_RemoveContributorAccess(id) {
        swal({
          title: "Are you sure?",
          text: "You want to remove the contributor access!",
          buttonsStyling: true,
          confirmButtonClass: "btn btn-success",
          showCancelButton: true,
          cancelButtonClass: "btn btn-danger",
          confirmButtonText: "Yes"
        }).then(x => {
          if (x.value == true) {
            this.statusUrl = "api/User/RevokeContributorAccess";
            this.toastr.success("Contributor access has been removed!");
    
            const contributorStatusModel = {
              id: id
            };
            this.fn_removeContributorAccessApi(this.statusUrl, contributorStatusModel);
          }
        });
    }

    fn_removeContributorAccessApi(url, data) {
        this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
          this.ngxService.start();
          const rs = result;
          if (rs.statusCode === 200) {
            this.ngxService.stop();
            this.fn_GetContributorList();
          } else {
            this.toastr.error("Something went wrong!");
          }
        });
      }
}
