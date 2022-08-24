import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PInputComponent } from './components/p-input/p-input.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PersonalSpaceComponent } from './components/personal-space/personal-space.component';
import { CredentialsComponent } from './components/types/credentials/credentials.component';
import { VerifyUserComponent } from './components/verify-user/verify-user.component';
import { ViewComponent } from './components/view/view.component';
import { WindowsComponent } from './components/windows/windows.component';
import { LoggedInGuard } from './gaurds/logged-in.guard';
import { NonLoggedInGuard } from './gaurds/non-logged-in.guard';

const routes: Routes = [
  
  { path: 'login', component: LoginComponent,
    children : [
      {path:'verify',component: VerifyUserComponent},
      {path:'input',component: PInputComponent}//,
   //   {path:'',component: PInputComponent}
    ],
     canActivate: [NonLoggedInGuard]
  },
  //{path:'login',component: PInputComponent},
 // { path: '', component: PersonalSpaceComponent },
 //{ path: '', component: AppComponent },
 { path: 'createspace', component: PInputComponent ,
 canActivate: [LoggedInGuard]},
  { path: 'launchcode', component: VerifyUserComponent ,
  canActivate: [NonLoggedInGuard]},
  { path: '', component: PersonalSpaceComponent, canActivate: [LoggedInGuard]},
  { path: 'space', component: PersonalSpaceComponent, canActivate: [LoggedInGuard]},
  { path: 'space/blackhole', component: CredentialsComponent, canActivate: [LoggedInGuard]},
  { path: '**', pathMatch: 'full', 
        component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
   firstMatcher (url: UrlSegment[]) {
   // const auth =  applicationInjector.get(AuthService);
    //return auth.isUserType('admin') ? ({consumed: [url[0]]}) : null;
    return true;
  }
}
