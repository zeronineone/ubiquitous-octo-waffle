import { Component, OnInit } from '@angular/core';
import { MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { tunnel,hexagonPath,default_theme } from './particle-themes';

@Component({
  selector: 'app-particles-bg',
  templateUrl: './particles-bg.component.html',
  styleUrls: ['./particles-bg.component.css']
})
export class ParticlesBgComponent implements OnInit {
  id = "tsparticles";
  
  constructor() { }

  ngOnInit(): void {
    
  }
  
  particlesLoaded(container: Container): void {
    console.log(container);
  }
  async particlesInit(engine: Engine): Promise<void> {
    console.log(engine);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }

  //particlesOptions = tunnel;
  //particlesOptions = hexagonPath ;
  particlesOptions= default_theme;

}