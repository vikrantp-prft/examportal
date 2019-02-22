import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamComponent } from './exam/exam.component';
import { InstructionComponent } from './instructions/instruction.component';
import { ExamsComponent } from './assignedExamList/exams.component';

const routes: Routes = [
    {
        path: 'exams/:userId', component: ExamsComponent
    },
    {
        path: 'instruction/:examId', component: InstructionComponent
    },
    {
        path: 'exam/:examId', component: ExamComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExamRoutingModule {
}
