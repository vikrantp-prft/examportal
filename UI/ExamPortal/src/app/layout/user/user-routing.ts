import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list/employeelist.component';
import { AddEmployeeComponent } from './employee/exployee-add-update/employeeaddupdate.component';
import { QuickAddEmployeeComponent } from './employee/exployee-add-update/quickemployeeaddupdate.component';
import { AddAdminUserComponent } from './admin-user/admin-user-add-update/adminuseraddupdate.component';
import { AdminUserListComponent } from './admin-user/admin-user-list/adminuserlist.component';
import { TraineeListComponent } from './trainee/trainee-list/traineeList.component';
import { AddTraineeUserComponent } from './trainee/trainee-user-add-update/traineeUserAddUpdate.component';
import { QuickTraineeAddUpdate } from './trainee/trainee-user-add-update/quickTraineeAddUpdate.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'employeelist', component: EmployeeListComponent
            },
            {
                path: 'addemployee', component: AddEmployeeComponent
            },
            {
                path: 'quickaddemployee', component: QuickAddEmployeeComponent
            },
            {
                path: 'addadminuser', component: AddAdminUserComponent
            },
            {
                path: 'adminuserlist', component: AdminUserListComponent
            },
            {
                path: 'traineelist', component: TraineeListComponent
            },
            {
                path: 'addtraineeuser', component: AddTraineeUserComponent
            },
            {
                path: 'quickaddtraineeuser', component: QuickTraineeAddUpdate
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {

}
