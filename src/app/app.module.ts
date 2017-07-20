import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Http, HttpModule, RequestOptions} from '@angular/http';

import { AppComponent } from './app.component';
import {TestComponent} from './component/testComponent/TestComponent';
import {UserService} from './service/user.service';

import {AuthHttp} from 'angular2-jwt';
import {authHttpServiceFactory} from "./factories/auth.factory";
import {HeaderComponent} from "./component/HeaderComponent/HeaderComponent";
import {LoginComponent} from "./component/LogInComponent/login.component";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, "./i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    })
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
