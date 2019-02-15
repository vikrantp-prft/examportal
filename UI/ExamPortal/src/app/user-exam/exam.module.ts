import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ExamRoutingModule } from './exam-routing.module';
import { ExamComponent } from './exam.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        ExamRoutingModule,
        NgxUiLoaderModule
    ],
    declarations: [ExamComponent]
})
export class ExamModule { }
