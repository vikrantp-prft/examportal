import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterService } from './_services/register.service';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorHandlingModule } from './Common/field-error-display/field-error-display.module';

@NgModule({
   declarations: [
      AppComponent,
      RegisterUserComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ErrorHandlingModule,
      ReactiveFormsModule
      //TranslateModule
   ],
   providers: [
      RegisterService,
      //TranslateService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
