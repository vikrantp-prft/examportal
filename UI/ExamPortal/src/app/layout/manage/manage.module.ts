import { CategoryEditUpdateComponent } from './category/category-edit-update/categoryEditUpdate.component';
import { AddDesignationComponent } from './Designation/designation-add-update/designationAddUpdate.component';
import { AddCategoryComponent } from './category/category-add-update/categoryaddupdate.component';
import { CategoryListComponent } from './category/category-list/categorylist.component';
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
import { EditTeamComponent } from './team/team-edit-update/teamEditUpdate.component';

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
        CategoryEditUpdateComponent,
        DesignationListComponent,
        AddDesignationComponent,
        TeamListComponent,
        AddTeamComponent,
        EditTeamComponent
    ]
})
export class ManageModule { }
