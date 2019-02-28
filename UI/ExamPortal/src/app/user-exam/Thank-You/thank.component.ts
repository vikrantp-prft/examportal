import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
    selector: 'app-thank',
    templateUrl: './thank.component.html',
    styleUrls: ['./thank.component.css']
})
export class ThankComponent implements OnInit {
    constructor(private ngxService: NgxUiLoaderService) { }

    ngOnInit(): void { }
}
