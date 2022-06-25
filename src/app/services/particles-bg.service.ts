import { Injectable } from '@angular/core';
import { particlesTunnel } from 'src/app/particles-config/backgrounds/particles-tunnel';
import { tunnel,hexagonPath,default_theme } from '../components/particles-bg/particle-themes';
import { particlesHexagons } from '../particles-config/backgrounds/particles-hexagons';

@Injectable({
  providedIn: 'root'
})
export class ParticlesBgService {

  constructor() { }


  getUserFormConfigs() : any{
    return default_theme;
  }
  getCreateJournyConfigs() : any{
    return particlesTunnel;
  } 
  getMySpaceConfigs() : any{
    return particlesHexagons;  
  }
}
