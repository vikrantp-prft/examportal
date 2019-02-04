import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterService } from './_services/register.service';
import { RegisterUserComponent } from './register-user/register-user.component';


@NgModule({
   declarations: [
      AppComponent,
      RegisterUserComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      RegisterService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
