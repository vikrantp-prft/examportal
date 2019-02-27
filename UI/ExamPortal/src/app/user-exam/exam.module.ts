import { InstructionComponent } from './instructions/instruction.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ExamRoutingModule } from './exam-routing.module';
import { ExamComponent } from './exam/exam.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ExamsComponent } from './assignedExamList/exams.component';
import { ThankComponent } from './Thank-You/thank.component';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        ExamRoutingModule,
        NgxUiLoaderModule
    ],
    declarations: [
        ExamComponent, 
        InstructionComponent,
        ExamsComponent,
        ThankComponent
    ]
})
export class ExamModule { }
