import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from "@angular/router";
import { strict } from 'assert';

@Component({
    selector: 'app-thank',
    templateUrl: './thank.component.html',
    styleUrls: ['./thank.component.css']
})
export class ThankComponent implements OnInit {
    constructor(private ngxService: NgxUiLoaderService,
        private router :  Router ) { }

    ngOnInit(): void { }

    fn_getUserIdExamId(){
       const userDetail = JSON.parse(localStorage.getItem('userDetails'));
       this.router.navigate(['/exams']);
    }
}
