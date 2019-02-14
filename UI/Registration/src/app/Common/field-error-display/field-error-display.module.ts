
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FieldErrorDisplayComponent } from "./field-error-display.component";
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    FieldErrorDisplayComponent
  ],
  providers: [],
  exports:[FieldErrorDisplayComponent
  ]
})
export class ErrorHandlingModule {}
