import { Component, ElementRef, OnInit, ChangeDetectorRef,ViewChild, ViewContainerRef,Input, SimpleChanges, OnChanges } from '@angular/core';
import { MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { tunnel,hexagonPath,default_theme } from './particle-themes';
import { particlesHexagons } from 'src/app/particles-config/backgrounds/particles-hexagons';
import { particlesTunnel } from 'src/app/particles-config/backgrounds/particles-tunnel';
import { NgParticlesComponent } from 'ng-particles';
import { ParticlesBgService } from 'src/app/services/particles-bg.service';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { BackgroundAction, BgUpdateEvent } from 'src/app/domains/config-objects';
import { Subject } from 'rxjs/internal/Subject';
import { InputServiceService } from 'src/app/services/input-service.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-particles-bg',
  templateUrl: './particles-bg.component.html',
  styleUrls: ['./particles-bg.component.css']
})
export class ParticlesBgComponent implements OnInit {
  //@Input() backgroundActionType: Subject<BackgroundAction> | undefined ;
  userFormId = "tsparticles-user-form";
  createJourneyId = "tsparticles-create-journey";
  bgCanvas = {
    cavasOne : true,
    cavasTwo : false,
  }
  isLoadingMode = false
  bgZindex = '-2!important';
  particlesOptions : any | undefined;
  constructor(private particlesBgService: ParticlesBgService,private inputServiceService : InputServiceService, private localStorageService : LocalStorageService) { 
   
  }



  ngOnInit(): void {
  //  this.particlesOptions = this.particlesBgService.getUserFormConfigs1(MoveDirection.bottomLeft);
  
  let bgUpdateEvent = this.localStorageService.get('bgUpdateEvent') ;
  let eventData: BgUpdateEvent
  if(bgUpdateEvent != null && bgUpdateEvent != undefined){
     eventData = JSON.parse(bgUpdateEvent)
     if(eventData.isMoving){
      this.isLoadingMode = true;
      this.particlesOptions = this.particlesBgService.getUserFormConfigs1(eventData.moveDirection);
      this.bgZindex = '2!important';
    }else {
      this.isLoadingMode = false;
      this.particlesOptions = this.particlesBgService.getUserFormConfigs();
      this.bgZindex = '-2!important';
     
    }
  }else{
    this.isLoadingMode = false;
    this.particlesOptions = this.particlesBgService.getUserFormConfigs();
    this.bgZindex = '-2!important';
  }
  this.localStorageService.remove('bgUpdateEvent');
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





updateBgEvent(eventData : BgUpdateEvent){
  console.log("particles comp this.backgroundAction ",eventData)  
  console.log("----");
 
  if(eventData.isMoving){
    this.particlesOptions = this.particlesBgService.getUserFormConfigs1(eventData.moveDirection);
    this.bgZindex = '2!important';
  }else {
    this.particlesOptions = this.particlesBgService.getUserFormConfigs();
    this.bgZindex = '-2!important';
   
  }
  this.ngOnInit();
  this.bgCanvas.cavasOne = !this.bgCanvas.cavasOne;
  this.bgCanvas.cavasTwo = !this.bgCanvas.cavasTwo;
}

}