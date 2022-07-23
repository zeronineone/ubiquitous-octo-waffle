import { Component, ElementRef, OnInit, ChangeDetectorRef,ViewChild, ViewContainerRef,Input, SimpleChanges, OnChanges } from '@angular/core';
import { MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { tunnel,hexagonPath,default_theme } from './particle-themes';
import { particlesHexagons } from 'src/app/particles-config/backgrounds/particles-hexagons';
import { particlesTunnel } from 'src/app/particles-config/backgrounds/particles-tunnel';
import { NgParticlesComponent } from 'ng-particles';
import { ParticlesBgService } from 'src/app/services/particles-bg.service';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { BackgroundAction } from 'src/app/domains/config-objects';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-particles-bg',
  templateUrl: './particles-bg.component.html',
  styleUrls: ['./particles-bg.component.css']
})
export class ParticlesBgComponent implements OnInit {
  //@Input() backgroundActionType: Subject<BackgroundAction> | undefined ;
  userFormId = "tsparticles-user-form";
  createJourneyId = "tsparticles-create-journey";
  userForm = true;
  createJourney = false;
 
  particlesOptions : any | undefined;
  constructor(private particlesBgService: ParticlesBgService) { 
    this.particlesOptions = particlesBgService.getUserFormConfigs();
  }



  ngOnInit(): void {
  
  }
  
  particlesLoaded(container: Container): void {
    console.log(container);
  }
  async particlesInit(engine: Engine): Promise<void> {
    console.log(engine);
   // alert(engine)
    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }





updateBgEvent(backgroundAction : BackgroundAction){
  console.log("particles comp this.backgroundAction "+backgroundAction)  
  console.log("----");
  
  if(backgroundAction == BackgroundAction.SIGNUP){
    this.particlesOptions= this.particlesBgService.getUserFormConfigs();
  }else if(backgroundAction == BackgroundAction.JOURNY_TO_PERSONAL_SPACE){
    this.particlesOptions= this.particlesBgService.getCreateJournyConfigs();
  }else if(backgroundAction == BackgroundAction.PERSONAL_SPACE){
    this.particlesOptions= this.particlesBgService.getMySpaceConfigs();
  }
  this.userForm = !this.userForm;
  this.createJourney = !this.createJourney;
}

}