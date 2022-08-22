import { Injectable } from '@angular/core';
import { particlesTunnel } from 'src/app/particles-config/backgrounds/particles-tunnel';
import { ClickMode, HoverMode, MoveDirection, OutMode } from 'tsparticles-engine';
import { tunnel,hexagonPath,default_theme } from '../components/particles-bg/particle-themes';
import { particlesHexagons } from '../particles-config/backgrounds/particles-hexagons';

@Injectable({
  providedIn: 'root'
})
export class ParticlesBgService {

  constructor() { }


  getUserFormConfigs() : any{
    this.znobg.particles.move = this.getStillWithRandomMove();
   // this.znobg.particles.move = this.getDirectionalMove(MoveDirection.inside);
    return this.znobg;//default_theme;;
  }
  getCreateJournyConfigs() : any{
    return particlesTunnel;
  } 
  getMySpaceConfigs() : any{
    return particlesHexagons;  
  }
  getStillWithRandomMove(){
    return {
      direction: MoveDirection.none,
      enable: true,
      outModes: {
        default: OutMode.out
      },
      random: true,
      speed: 1,
      straight: true,
      bounce:false
    }
  }
  getDirectionalMove(moveDirection : MoveDirection){
    return {
      direction: moveDirection,
      enable: true,
      outModes: {
        default: OutMode.out
      },
      random: false,
      speed: 20,
      straight: true,
      bounce:false
    }
  }
  znobg  = {
    fullScreen: {
        zIndex: -1
      },
    background: {
      color: {
        value: ""
      }
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: ClickMode.push
        },
        onHover: {
          enable: false,
          mode: HoverMode.repulse
        },
        resize: true
      },
      modes: {
        push: {
          quantity: 4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: "#ffffff"
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: false,
        opacity: 0.5,
        width: 1
      },
      collisions: {
        enable: false
      },
   move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.out
        },
        random: true,
        speed: 1,
        straight: true,
        bounce:false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 100
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: "circle"
      },
      size: {
        value: {min: 1, max: 5 },
      }
    },
    detectRetina: true
  };
}
