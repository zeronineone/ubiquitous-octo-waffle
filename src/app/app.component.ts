import { Component, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { ParticlesBgComponent } from './components/particles-bg/particles-bg.component';
import { BackgroundAction } from './domains/config-objects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ubiquitous-octo-waffle';

  @ViewChild(ParticlesBgComponent, {static : true}) particlesBgComponent : ParticlesBgComponent | undefined;
  
  backgroundActionType: Subject<BackgroundAction> = new Subject<BackgroundAction>();;

  updateBgEvent(backgroundAction : BackgroundAction){
    console.log("updateBgEvent "+backgroundAction);
    this.particlesBgComponent?.updateBgEvent(backgroundAction)
    console.log("IN APP COMP this.backgroundActionType "+this.backgroundActionType);
  }

}
