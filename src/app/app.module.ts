import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule, RequestOptions} from '@angular/http';

import { AppComponent } from './app.component';
import { UserService} from './service/user.service';

import { AuthHttp} from 'angular2-jwt';
import { authHttpServiceFactory} from './factories/auth.factory';
import { HeaderComponent} from './component/HeaderComponent/header.component';
import { LoginSignupComponent} from './component/LoginSignupForm/login.signup.component';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { ProfileComponent} from './component/ProfileComponent/profile.component';
import { routing} from './app.routing';
import { BackgroundComponent} from './component/BackgroundComponent/background.component';
import { DraganddropComponent} from './component/DragandropComponent/draganddrop.component';
import { AddstepComponent} from './component/StepComponent/AddStepComponent/addstep.component';
import { InstructionpagepreComponent} from './component/InstructionpageComponent/InstructionpagePreComponent/instructionpagepre.component';
import { DndModule} from 'ng2-dnd';
import { TextareaComponent} from './component/TextareaComponent/textarea.component';
import { InfiniteScrollModule} from 'angular2-infinite-scroll';
import { ImageareaComponent} from './component/ImageareaComponent/imagearea.component';
//import { VideoareaComponent} from './component/VideoareaComponent/videoarea.component';
import { SafePipe} from './service/safepipe.service';
import { SignupComponent} from "./component/LoginSignupForm/SignUpComponent/signup.component";
import { LoginComponent} from "./component/LoginSignupForm/LoginComponent/login.component";
//import { YoutubePlayerModule} from "ng2-youtube-player";
import { AuthenticationService} from "./service/authentication.service";
import { AuthGuard} from "./service/guards/auth.guard";
import {InstructionComponent} from "./component/InstructionComponent/instruction.component";
import {StepComponent} from "./component/StepComponent/step.component";
import {LogoutComponent} from "./component/LogoutComponent/logout.component";
import {StepService} from "./service/step.service";
import {Ng2CloudinaryModule} from "ng2-cloudinary";
import {AddInstructionComponent} from "./component/InstructionComponent/AddInstructionComponent/add.instruction.component";
import {InstructionService} from "./service/instruction.service";
import {FileUploadModule} from "ng2-file-upload";
import {CommentComponent} from "./component/InstructionComponent/CommentComponent/comment.component";
import {EventService} from "./service/event.service";

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AddInstructionComponent,
    InstructionComponent,
    HeaderComponent,
    LoginComponent,
    CommentComponent,
    SignupComponent,
    LoginSignupComponent,
    ProfileComponent,
    InstructionComponent,
    BackgroundComponent,
    DraganddropComponent,
    InstructionpagepreComponent,
    AddstepComponent,
    StepComponent,
    TextareaComponent,
    ImageareaComponent,
   // VideoareaComponent,
    LogoutComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    Ng2CloudinaryModule,
    FileUploadModule,
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
    UserService,
    StepService,
    InstructionService,
    AuthGuard,
    AuthenticationService,
    StepService,
    EventService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
