import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { commonService } from 'src/app/common/services/common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'degree-edit-update',
    templateUrl: './degreeEditUpdate.html',
})
export class EditDegreeComponent implements OnInit {

    public degreeID = "";
    //public teamList = [];
    public degreeInfo: any;
   
    constructor(private route: ActivatedRoute,public router: Router, private CommonService: commonService, public http: Http, private toastr: ToastrService) {
        this.route.params.subscribe(params => {
            this.degreeID = params['id'];
          });
    }
  
    ngOnInit(): void {
        this.fn_GetDegreeById();
     }

        
     //degreeForm model
        degreeForm = new FormGroup({
        degreeTitle: new FormControl('', Validators.required),
        degreeDescription: new FormControl('', Validators.required),
        degreeisActive: new FormControl('')
      });
    
      get degreeTitle(){
        return this.degreeForm.get('degreeTitle');
      }
    
      get degreeDescription(){
        return this.degreeForm.get('degreeDescription');
      }


      // Get degree by id
      fn_GetDegreeById() {
            const url = 'api/Master/GetMasterById';
            const degreeModel =
            {
                "id": this.degreeID,
                "pageSize": 0,
                "pageNumber": 0,
                "totleRecords": 0,
                "filter": "string",
                "sortBy": "string",
                "isDescending": true
            };

            this.CommonService.fn_PostWithData(degreeModel, url).subscribe((result: any) => {
            const rs = result;
            if (rs.statusCode == 200) {
             this.degreeInfo = rs.data;
             this.fn_setEditValues();
            }
            else {
            }
            }); 
        }

        

        fn_setEditValues() {
            // this.categoryForm.controls.id.setValue(this.examID);
            this.degreeForm.controls.degreeTitle.setValue(this.degreeInfo.name);
            this.degreeForm.controls.degreeDescription.setValue(this.degreeInfo.description);
            this.degreeForm.controls.degreeisActive.setValue(this.degreeInfo.isActive);
        }



     fn_saveDegree(data) {
        if (this.degreeForm.invalid) {
          this.degreeForm.setErrors({
            Validators
          })
        }
        const url = 'api/Master/Update';
        const degreeModel =
        {
            id: this.degreeID,
            name: data.value.degreeTitle ,
            isActive: data.value.degreeisActive,
            description: data.value.degreeDescription,
            masterType: "Degree"
         
        }
        //console.log(teamModel);
        this.fn_saveDegreefun(url, degreeModel);
      }

     
      // function for save degree details.
      fn_saveDegreefun(url, data) {
            this.CommonService.fn_PostWithData(data, url).subscribe((result: any) => {
            // debugger;
            // console.log(result);
            const rs = result;
            if (rs.statusCode == 200) {
                this.toastr.success('Degree edited successfully!');
                this.router.navigate(['manage/degreeList']);
            }
            else {
                this.toastr.success('Failed to edit degree');
            }
        });
    }
    

}
