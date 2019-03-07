import { Component, OnInit } from '@angular/core';
import { commonService } from 'src/app/common/services/common.service';

@Component({
    selector: 'contributor-list',
    templateUrl: './contributorList.html',
    providers: [commonService]
})
export class ContributorListComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
