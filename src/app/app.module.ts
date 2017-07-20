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

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
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
