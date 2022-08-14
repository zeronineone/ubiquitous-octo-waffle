import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { faArrowRight, faCheck, faL, faXmark } from '@fortawesome/free-solid-svg-icons';
import { NgForm, Validators } from '@angular/forms';
import { InputComponentData } from 'src/app/domains/input-component';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { map } from 'rxjs/operators';
import { InputServiceService } from 'src/app/services/input-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-p-input',
  templateUrl: './p-input.component.html',
  styleUrls: ['./p-input.component.css']
})
export class PInputComponent implements OnInit {

  //@Input()  inputComponentDataI : InputComponentData | undefined;

  @Input() inputComponentDataI : InputComponentData | undefined;

  questionLabelSub: Subscription | undefined;
  
  faArrowRight = faArrowRight;
  faCheck = faCheck;
  faXmark = faXmark;

  @Output() publishCapturedInput:EventEmitter<any> = new EventEmitter<any>();
  sub: any;

  data: any = {};
  routeState: any;
  constructor(private inputServiceService: InputServiceService, private route: ActivatedRoute,private location:Location,private router: Router) { 
   /* if (this.router.getCurrentNavigation()?.extras.state) {
      this.routeState = this.router.getCurrentNavigation()?.extras.state;
      if (this.routeState) {
        this.data.frontEnd = this.routeState.frontEnd
          ? JSON.parse(this.routeState.frontEnd)
          : '';
        this.data.site = this.routeState.site ? this.routeState.site : '';
      }
    }*/
  //  console.log(this.router.getCurrentNavigation().extras.state);
   }

  ngOnInit(): void {
    console.log(history.state);
    if(Object.keys(history.state).length > 1){
      this.inputComponentDataI = history.state;
    }

   // this.questionLabelSub = this.inputServiceService.getQuestionLabels().subscribe((value : any)=>{
    //  console.log(value)
     // this.inputComponentDataI = value;
     //  })
    /*this.route.data.subscribe(data => {
      console.log(data);
  }) */
    /*this.route.queryParams.subscribe(params => {
      this.inputComponentDataI = params['inputComponentDataI'];
    });

    console.log(this.location.getState());

    console.log(history.state);

    this.sub = this.route.data.subscribe((value)=>(
      console.log(value)
      ));
      
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.routeState = this.router.getCurrentNavigation()?.extras.state;
        if (this.routeState) {
          this.data.frontEnd = this.routeState.frontEnd
            ? JSON.parse(this.routeState.frontEnd)
            : '';
          this.data.site = this.routeState.site ? this.routeState.site : '';
        }
      }

*/
  }
  ngOnDestroy() {
   // this.sub.unsubscribe();
  }

  parentFunction : Function | undefined;
  publishCaturedData(capturedFormData : NgForm) {
   // this.publishCapturedInput.emit(capturedFormData.value)
 //  if(this.parentFunction){
  //  this.parentFunction();
  // }
  this.inputServiceService.capturedDataSubject.next(capturedFormData.value);
  }
   


  }

