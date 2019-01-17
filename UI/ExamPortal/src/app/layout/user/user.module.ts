import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing';
import { PaginationModule } from 'ng2-bootstrap';
import { EmployeeListComponent } from './employee/employee-list/employeelist.component';
import { AddEmployeeComponent } from './employee/exployee-add-update/employeeaddupdate.component';
import { QuickAddEmployeeComponent } from './employee/exployee-add-update/quickemployeeaddupdate.component';
import {AdminUserListComponent} from './admin-user/admin-user-list/adminuserlist.component';
import { AddAdminUserComponent } from './admin-user/admin-user-add-update/adminuseraddupdate.component';

@NgModule({
    imports: [CommonModule, UserRoutingModule, PaginationModule.forRoot() ],
    declarations: [UserComponent,
         EmployeeListComponent,
         AddEmployeeComponent,
         QuickAddEmployeeComponent,
         AdminUserListComponent,
         AddAdminUserComponent
    ]
})
export class UserModule {}
