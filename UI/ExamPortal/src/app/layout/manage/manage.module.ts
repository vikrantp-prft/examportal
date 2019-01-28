import { AddCategoryComponent } from './category-add-update/categoryaddupdate.component';
import { CategoryListComponent } from './category-list/categorylist.component';
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
import { DesignationListComponent } from './Designation/designation-list/designationList.component';
import { AddTeamComponent } from './team/team-add-update/teamaddupdate.component';
import { TeamListComponent } from './team/team-list/teamList.component';
import { examEditUpdateComponent } from './exam/exam-edit-update/examEditUpdate.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ManageRoutingModule,
        PaginationModule.forRoot()],
    declarations: [
        FileSelectDirective,
        importQuestionComponent,
        ManageComponent,
        ExamListComponent,
        examEditUpdateComponent,
        examAddUpdateComponent,
        questionListComponent,
        questionAddUpdateComponent,
        CategoryListComponent,
        AddCategoryComponent,
        DesignationListComponent,
        TeamListComponent,
        AddTeamComponent
    ]
})
export class ManageModule { }
