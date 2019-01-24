import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamListComponent } from './exam/exam-list/examList.component';
import { examAddUpdateComponent } from './exam/exam-add-update/examAddUpdate.component';
import { questionListComponent } from './exam/question-list/questionList.component';
import { questionAddUpdateComponent } from './exam/question-add-update/questionAddUpdate.component';
import { importQuestionComponent } from './exam/import-questions/importQuestion.component';


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
                path: 'questionList', component: questionListComponent
            },
            {
                path: 'addExamQuestion', component: questionAddUpdateComponent
            },
            {
                path: 'importExamQuestion', component: importQuestionComponent
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
