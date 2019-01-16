import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list/employeelist.component';
import { AddEmployeeComponent } from './employee/exployee-add-update/employeeaddupdate.component';


const routes: Routes = [
     {
        path: '',
        children: [
            {path: 'employeelist', component: EmployeeListComponent },
            {path: 'addemployee', component: AddEmployeeComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {

}
