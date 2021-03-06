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


@NgModule({
  declarations: [
    AppComponent,
    ParticlesBgComponent,
    PInputComponent,
    VerifyUserComponent,
    PersonalSpaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
