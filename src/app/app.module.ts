import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule, RequestOptions} from '@angular/http';

import { AppComponent } from './app.component';
import { UserService} from './service/user.service';

import { AuthHttp} from 'angular2-jwt';
import { authHttpServiceFactory} from './factories/auth.factory';
import { HeaderComponent} from './component/HeaderComponent/header.component';
import {LoginSignupComponent} from './component/LoginSignupForm/login.signup.component';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { ProfileComponent} from './component/ProfileComponent/profile.component';
import { routing} from './app.routing';
import { BackgroundComponent} from './component/BackgroundComponent/background.component';
import { DraganddropComponent} from './component/DragandropComponent/draganddrop.component';
import { InstructionpageredComponent} from './component/InstructionpageComponent/IntructionpageRedComponent/instructionpagered.component';
import { InstructionpagepreComponent} from './component/InstructionpageComponent/InstructionpagePreComponent/instructionpagepre.component';
import { DndModule} from 'ng2-dnd';
import {TextareaComponent} from './component/InstructionpageComponent/TextareaComponent/textarea.component';
import {InfiniteScrollModule} from 'angular2-infinite-scroll';
import {ImageareaComponent} from './component/InstructionpageComponent/ImageareaComponent/imagearea.component';
import {VideoareaComponent} from './component/InstructionpageComponent/VideoareaComponent/videoarea.component';
import {SafePipe} from './service/safepipe.service';
import {SignupComponent} from "./component/LoginSignupForm/SignUpComponent/signup.component";
import {LoginComponent} from "./component/LoginSignupForm/LoginComponent/login.component";
import {InstructionComponent} from "./component/InstructionComponent/instruction.component";
// import {YoutubePlayerModule} from "ng2-youtube-player";

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    LoginSignupComponent,
    ProfileComponent,
    InstructionComponent,
    BackgroundComponent,
    DraganddropComponent,
    InstructionpagepreComponent,
    InstructionpageredComponent,
    TextareaComponent,
    ImageareaComponent,
    // VideoareaComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    FormsModule,
    HttpModule,
    routing,
    // YoutubePlayerModule,
    DndModule.forRoot(),
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
