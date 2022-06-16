import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgParticlesModule } from "ng-particles";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticlesBgComponent } from './components/particles-bg/particles-bg.component';
import { PInputComponent } from './components/p-input/p-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticlesBgComponent,
    PInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
