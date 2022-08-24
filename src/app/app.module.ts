import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgParticlesModule } from "ng-particles";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ParticlesBgComponent } from './components/particles-bg/particles-bg.component';
import { PInputComponent } from './components/p-input/p-input.component';
import { VerifyUserComponent } from './components/verify-user/verify-user.component';
import { PersonalSpaceComponent } from './components/personal-space/personal-space.component';
import { LoginComponent } from './components/login/login.component';
import { WindowsComponent } from './components/windows/windows.component';
import { ViewComponent } from './components/view/view.component';
import { CredentialsComponent } from './components/types/credentials/credentials.component';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { DynamicDirective } from './directive/dynamic.directive';
import { LogoutComponent } from './components/logout/logout.component';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';


@NgModule({
  declarations: [
    AppComponent,
    ParticlesBgComponent,
    PInputComponent,
    VerifyUserComponent,
    PersonalSpaceComponent,
    LoginComponent,
    WindowsComponent,
    ViewComponent,
    CredentialsComponent,
    PagenotfoundComponent,
    DynamicDirective,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    NgxGoogleAnalyticsModule.forRoot('G-ZFVEDRVTKD')
  ],
  //providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
