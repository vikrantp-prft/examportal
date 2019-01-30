import { CategoryEditUpdateComponent } from './category/category-edit-update/categoryEditUpdate.component';
import { AddTeamComponent } from './team/team-add-update/teamaddupdate.component';
import { AddCategoryComponent } from './category/category-add-update/categoryaddupdate.component';
import { CategoryListComponent } from './category/category-list/categorylist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamListComponent } from './exam/exam-list/examList.component';
import { examAddUpdateComponent } from './exam/exam-add-update/examAddUpdate.component';
import { questionListComponent } from './exam/question-list/questionList.component';
import { questionAddUpdateComponent } from './exam/question-add-update/questionAddUpdate.component';
import { importQuestionComponent } from './exam/import-questions/importQuestion.component';
import { DesignationListComponent } from './Designation/designation-list/designationList.component';
import { TeamListComponent } from './team/team-list/teamList.component';
import { examEditUpdateComponent } from './exam/exam-edit-update/examEditUpdate.component';
import { AddDesignationComponent } from './Designation/designation-add-update/designationAddUpdate.component';
import { EditTeamComponent } from './team/team-edit-update/teamEditUpdate.component';
import { EditDesignationComponent } from './Designation/designation-edit-update/designationEditUpdate.component';



const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'examlist', component: ExamListComponent
            },
            {
                path: 'addexam', component: examAddUpdateComponent
            },
            {
                path: 'editExam/:id', component: examEditUpdateComponent
            },
            {
                path: 'questionList/:id', component: questionListComponent
            },
            {
                path: 'addExamQuestion/:id', component: questionAddUpdateComponent
            },
            {
                path: 'importExamQuestion', component: importQuestionComponent
            },
            {
                path: 'categorylist', component: CategoryListComponent
            },
            {
                path: 'addcategory', component: AddCategoryComponent
            },
            {
                path: 'editCategory/:id', component: CategoryEditUpdateComponent
            },
            {
                path: 'designationlist', component: DesignationListComponent
            },
            {
                path: 'addDesignation', component: AddDesignationComponent
            },
            {
                path: 'editDesignation/:id', component: EditDesignationComponent
            },    
            {
                path: 'teamlist', component: TeamListComponent
            },
            {
                path: 'addTeam', component: AddTeamComponent
            },
            {
                path: 'editTeamList/:id', component: EditTeamComponent
            }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageRoutingModule {

}
