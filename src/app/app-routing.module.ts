import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PInputComponent } from './components/p-input/p-input.component';
import { PersonalSpaceComponent } from './components/personal-space/personal-space.component';
import { CredentialsComponent } from './components/types/credentials/credentials.component';
import { VerifyUserComponent } from './components/verify-user/verify-user.component';
import { ViewComponent } from './components/view/view.component';
import { WindowsComponent } from './components/windows/windows.component';

const routes: Routes = [
  
  { path: 'login', component: LoginComponent,
    children : [
      {path:'verify',component: VerifyUserComponent},
      {path:'input',component: PInputComponent}//,
   //   {path:'',component: PInputComponent}
    ],
  },
  //{path:'login',component: PInputComponent},
 // { path: '', component: PersonalSpaceComponent },
 //{ path: '', component: AppComponent },
 { path: 'createspace', component: PInputComponent },
  { path: 'launchcode', component: VerifyUserComponent },
  { path: 'space', component: PersonalSpaceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
   firstMatcher (url: UrlSegment[]) {
   // const auth =  applicationInjector.get(AuthService);
    //return auth.isUserType('admin') ? ({consumed: [url[0]]}) : null;
    return true;
  }
}
