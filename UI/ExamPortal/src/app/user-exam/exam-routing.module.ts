import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamComponent } from './exam/exam.component';
import { InstructionComponent } from './instructions/instruction.component';
import { ExamsComponent } from './assignedExamList/exams.component';
import { ThankComponent } from './Thank-You/thank.component';
import { ViewResultComponent } from './view-result/viewResult.component';

const routes: Routes = [
    {
        path: 'exams/:userId', component: ExamsComponent
    },
    {
        path: 'instruction/:examId', component: InstructionComponent
    },
    {
        path: 'exam/:examId', component: ExamComponent
    },
    {
        path: 'thank-you', component: ThankComponent
    },
    {
        path: 'viewResult', component: ViewResultComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExamRoutingModule {
}
