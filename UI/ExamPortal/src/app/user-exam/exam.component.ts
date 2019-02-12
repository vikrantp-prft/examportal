import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-exam',
    templateUrl: './exam.component.html',
    animations: [routerTransition()]
})
export class ExamComponent implements OnInit {
    constructor() {
        
    }

    ngOnInit() {}
}
