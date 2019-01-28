import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing';
import { PaginationModule } from 'ng2-bootstrap';
import { EmployeeListComponent } from './employee/employee-list/employeelist.component';
import { AddEmployeeComponent } from './employee/exployee-add-update/employeeaddupdate.component';
import { QuickAddEmployeeComponent } from './employee/exployee-add-update/quickemployeeaddupdate.component';
import { AdminUserListComponent } from './admin-user/admin-user-list/adminuserlist.component';
import { AddAdminUserComponent } from './admin-user/admin-user-add-update/adminuseraddupdate.component';
import { TraineeListComponent } from './trainee/trainee-list/traineeList.component';
import { AddTraineeUserComponent } from './trainee/trainee-user-add-update/traineeUserAddUpdate.component';
import { QuickTraineeAddUpdate } from './trainee/trainee-user-add-update/quickTraineeAddUpdate.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UploadComponent } from './upload/upload.component';

@NgModule({
    imports: [CommonModule, UserRoutingModule, PaginationModule.forRoot(),FormsModule,ReactiveFormsModule],
    declarations: [UserComponent,
        EmployeeListComponent,
        AddEmployeeComponent,
        QuickAddEmployeeComponent,
        AdminUserListComponent,
        AddAdminUserComponent,
        TraineeListComponent,
        AddTraineeUserComponent,
        QuickTraineeAddUpdate,
        UploadComponent
    ]
})
export class UserModule { }
