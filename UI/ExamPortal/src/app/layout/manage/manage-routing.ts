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
import { DegreeListComponent } from './degree/degree-list/degreeList.component';
import { AddDegreeComponent } from './degree/degree-add-update/degreeAddUpdate.component';
import { EditDegreeComponent } from './degree/degree-edit-update/degreeEditUpdate.component';
import { StateListComponent } from './state/state-list/stateList.component';
import { AddStateComponent } from './state/state-add-update/stateAddUpdate.component';
import { EditStateComponent } from './state/state-edit-update/stateEditUpdate.component';
import { UserListComponent } from './exam/user-list/userList.component';
import { ResultListComponent } from './exam/examResult-list/resultList.component';
import { DetailedResultComponent } from './exam/detailedResult/detailedResult.component';



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
            },
            {
                path: 'degreeList', component: DegreeListComponent
            },
            {
                path: 'addDegree', component: AddDegreeComponent
            },
            {
                path: 'editDegree/:id', component: EditDegreeComponent
            },
            {
                path: 'stateList', component: StateListComponent
            },
            {
                path: 'addState', component: AddStateComponent
            },
            {
                path: 'editState/:id', component: EditStateComponent
            },
            {
                path: 'userList/:examId', component: UserListComponent
            },
            {
                path: 'resultList/:examId', component: ResultListComponent
            },
            {
                path: 'detailedResult/:userId/:examId', component:DetailedResultComponent
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
