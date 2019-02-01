import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { commonService } from 'src/app/common/services/common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'state-edit-update',
    templateUrl: './stateEditUpdate.html',
})
export class EditStateComponent implements OnInit {

    public stateID = "";
    //public teamList = [];
    public stateInfo: any;
   
    constructor(private route: ActivatedRoute,public router: Router, private CommonService: commonService, public http: Http, private toastr: ToastrService) {
        this.route.params.subscribe(params => {
            this.stateID = params['id'];
          });
    }
  
    ngOnInit(): void {
        this.fn_GetStateById();
     }

        
     //stateForm model
     stateForm = new FormGroup({
        stateTitle: new FormControl('', Validators.required),
        stateDescription: new FormControl('', Validators.required),
        stateisActive: new FormControl('')
      });
    
      get stateTitle(){
        return this.stateForm.get('stateTitle');
      }
    
      get stateDescription(){
        return this.stateForm.get('stateDescription');
      }


      // Get state by id
      fn_GetStateById() {
            const url = 'api/Master/GetMasterById';
            const stateModel =
            {
                "id": this.stateID,
                "pageSize": 0,
                "pageNumber": 0,
                "totleRecords": 0,
                "filter": "string",
                "sortBy": "string",
                "isDescending": true
            };

            this.CommonService.fn_PostWithData(stateModel, url).subscribe((result: any) => {
            const rs = result;
            if (rs.statusCode == 200) {
             this.stateInfo = rs.data;
             this.fn_setEditValues();
            }
            else {
            }
            }); 
        }

        

        fn_setEditValues() {
            // this.categoryForm.controls.id.setValue(this.examID);
            this.stateForm.controls.stateTitle.setValue(this.stateInfo.name);
            this.stateForm.controls.stateDescription.setValue(this.stateInfo.description);
            this.stateForm.controls.stateisActive.setValue(this.stateInfo.isActive);
        }



     fn_saveState(data) {
        if (this.stateForm.invalid) {
          this.stateForm.setErrors({
            Validators
          })
        }
        const url = 'api/Master/Update';
        const stateModel =
        {
            id: this.stateID,
            name: data.value.stateTitle ,
            isActive: data.value.stateisActive,
            description: data.value.stateDescription,
            masterType: "State"
         
        }
        //console.log(teamModel);
        this.fn_saveStatefun(url, stateModel);
      }

     
      // function for save degree details.
      fn_saveStatefun(url, data) {
            this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
            // debugger;
            // console.log(result);
            const rs = result;
            if (rs.statusCode == 200) {
                this.toastr.success('State edited successfully!');
                this.router.navigate(['manage/stateList']);
            }
            else {
                this.toastr.success('Failed to edit state');
            }
        });
    }
    

}
