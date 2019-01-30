import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { commonService } from 'src/app/common/services/common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'designation-edit-update',
    templateUrl: './designationEditUpdate.component.html',
})
export class EditDesignationComponent implements OnInit {

    public designationID = "";
    public designationInfo: any;
   
    constructor(private route: ActivatedRoute,public router: Router, private CommonService: commonService, public http: Http, private toastr: ToastrService) {
        this.route.params.subscribe(params => {
            this.designationID = params['id'];
          });
    }
  
    ngOnInit(): void {
        this.fn_GetDesignationById();
     }

        
     //designationForm model
        designationForm = new FormGroup({
        designationTitle: new FormControl('', Validators.required),
        designationDescription: new FormControl('', Validators.required),
        designationisActive: new FormControl('')
      });
    
      get designationTitle(){
        return this.designationForm.get('designationTitle');
      }
    
      get designationDescription(){
        return this.designationForm.get('designationDescription');
      }

    frmReset()
    {
        this.designationForm.reset();
    }  


      // Get designation by id
        fn_GetDesignationById() {
            const url = 'api/Master/GetMasterById';
            const designationModel =
            {
                "id": this.designationID,
                "pageSize": 0,
                "pageNumber": 0,
                "totleRecords": 0,
                "filter": "string",
                "sortBy": "string",
                "isDescending": true
            };

            this.CommonService.fn_PostWithData(designationModel, url).subscribe((result: any) => {
            const rs = result;
            if (rs.statusCode == 200) {
             this.designationInfo = rs.data;
             this.fn_setEditValues();
            }
            else {
            }
            }); 
        }

        

        fn_setEditValues() {
            // this.categoryForm.controls.id.setValue(this.examID);
            this.designationForm.controls.designationTitle.setValue(this.designationInfo.name);
            this.designationForm.controls.designationDescription.setValue(this.designationInfo.description);
            this.designationForm.controls.designationisActive.setValue(this.designationInfo.isActive);
        }



     fn_saveDesignation(data) {
        if (this.designationForm.invalid) {
          this.designationForm.setErrors({
            Validators
          })
        }
        const url = 'api/Master/Update';
        const designationModel =
        {
            id: this.designationID,
            name: data.value.designationTitle ,
            isActive: true,
            description: data.value.designationDescription,
            masterType: "Designation"
         
        }
        //console.log(teamModel);
        this.fn_saveDesignationfun(url, designationModel);
      }

     
      // function for save designation details.
        fn_saveDesignationfun(url, data) {
            this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
            // debugger;
            // console.log(result);
            const rs = result;
            if (rs.statusCode == 200) {
                this.toastr.success('Designation edited successfully!');
                this.router.navigate(['manage/designationlist']);
            }
            else {
                this.toastr.success('Failed to edit designation');
            }
        });
    }
    

}
