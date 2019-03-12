import { CustomAuthService } from './common/services/auth.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { commonService } from './common/services/common.service';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';
import { ErrorHandlingModule } from './common/field-error-display/field-error-display.module';
import {NgxUiLoaderModule} from 'ngx-ui-loader'
// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {

  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    NgxUiLoaderModule,
    ErrorHandlingModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [AuthGuard, commonService,CustomAuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
