import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage.component';
import { ManageRoutingModule } from './manage-routing';
import { PaginationModule } from 'ng2-bootstrap';
import { ExamListComponent } from './exam/exam-list/examList.component';
import { examAddUpdateComponent } from './exam/exam-add-update/examAddUpdate.component';
import { questionListComponent } from './exam/question-list/questionList.component';
import { questionAddUpdateComponent } from './exam/question-add-update/questionAddUpdate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FileSelectDirective } from 'ng2-file-upload';
import { importQuestionComponent } from './exam/import-questions/importQuestion.component';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, ManageRoutingModule, PaginationModule.forRoot()],
    declarations: [FileSelectDirective, importQuestionComponent, ManageComponent, ExamListComponent, examAddUpdateComponent, questionListComponent, questionAddUpdateComponent]
})
export class ManageModule { }
