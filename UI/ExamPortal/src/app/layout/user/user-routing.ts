import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list/employeelist.component';
import { AddEmployeeComponent } from './employee/exployee-add-update/employeeaddupdate.component';
import { QuickAddEmployeeComponent } from './employee/exployee-add-update/quickemployeeaddupdate.component';
import { AddAdminUserComponent } from './admin-user/admin-user-add-update/adminuseraddupdate.component';
import { AdminUserListComponent } from './admin-user/admin-user-list/adminuserlist.component';


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
                path: 'quickaddemployee', component : QuickAddEmployeeComponent
            },

            {
                path: 'addadminuser', component: AddAdminUserComponent
             },
            {
                path: 'adminuserlist', component: AdminUserListComponent
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
