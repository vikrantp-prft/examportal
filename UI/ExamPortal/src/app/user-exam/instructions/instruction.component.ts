import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { commonService } from 'src/app/common/services/common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-instruction',
    templateUrl: './instruction.component.html',
    styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {
    examDetail;
    examId: string;
    examName: string;
    examDurationHours: number;
    examDurationMinutes: number;
    constructor(private ngxService: NgxUiLoaderService, private CommonService: commonService, private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            this.examId = params['examId'];
        });
    }

    ngOnInit() { 
    }
}
