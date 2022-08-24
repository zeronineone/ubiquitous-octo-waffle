import { Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
import { MoveDirection } from 'tsparticles-engine';
import { ParticlesBgComponent } from './components/particles-bg/particles-bg.component';
import { DynamicDirective } from './directive/dynamic.directive';
import { BackgroundAction } from './domains/config-objects';
import { AuthServiceService } from './services/auth-service.service';
import { InputServiceService } from './services/input-service.service';
import { RoutingService } from './services/routing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sankalan';
  @ViewChild(DynamicDirective, { static: true })dynamicChild!: DynamicDirective;
  //@ViewChild(ParticlesBgComponent, {static : true}) particlesBgComponent : ParticlesBgComponent | undefined;
  
  //backgroundActionType: Subject<BackgroundAction> = new Subject<BackgroundAction>();
;
private componentRef!: ComponentRef<any> ;
  constructor(private inputServiceService: InputServiceService, router: Router, private authServiceService : AuthServiceService, private routingService : RoutingService) { }
  
  ngOnInit(): void {
    this.componentRef = this.dynamicChild.viewContainerRef.createComponent(ParticlesBgComponent);
   /* if(this.authServiceService.isLoggedIn()){
      this.routingService.routeToSpacePage({},this.router);
    }else{
      this.routingService.routeToLoginPage({},this.router);
    }*/ 
    
    this.inputServiceService.getUpdateBackgroundSubject().subscribe((value)=>{
      console.log(value)
      localStorage.setItem('bgUpdateEvent',JSON.stringify(value));
      this.destroyComponent();
      this.componentRef = this.dynamicChild.viewContainerRef.createComponent(ParticlesBgComponent);
       })
  }


  //@ViewChild(DynamicDirective) dynamic: DynamicDirective;


/*createComponent(componentname: string) {
    // Clear the container.
    this.alertContainer.clear();
    // Create a factory for MessageComponent.
    const factory = this.resolver.resolveComponentFactory(ParticlesBgComponent);
    // Create a component using the factory.
   // JSON.stringify()
    this.componentRef = this.alertContainer.createComponent(factory);
    // Pass the value for @Input properties using a component reference instance method.
   // this.componentRef.instance.updateBgEvent({moveDirection:MoveDirection.bottom,isMoving:true});// = componentname + " " + "component";
    alert(componentname + " " + "component" + " " + "created successfully");
}*/

/*createComponent(
  componentInstance: any,
  viewContainer: any
): ComponentRef<ParticlesBgComponent> {
  const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
    componentInstance
);
const viewContainerRef = viewContainer.viewContainerRef;
viewContainerRef.clear();
this.componentRef = viewContainerRef.createComponent(componentFactory);
return this.componentRef;
}
*/
destroyComponent() {
    // destroy a component using the componentRef.
    this.componentRef.destroy();
   // alert("component" + " " + "destroy successfully");
}

}
