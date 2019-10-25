import { InfoComponent } from './core/info/info.component';
import { SignUpComponent } from './sign-up/SignUpComponent';
import { CloginComponent } from './clogin/clogin.component';
import { CallusComponent } from './core/info/callus/callus.component';
import { OurteamComponent } from './core/info/ourteam/ourteam.component';
import { ContactusComponent } from './core/info/contactus/contactus.component';
import { AboutusComponent } from './core/info/aboutus/aboutus.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'aboutus',component:AboutusComponent},

  {path:'Clogin',component:CloginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'info',component:InfoComponent,children:[
    {path:'aboutus',component:AboutusComponent},
    {path:'contactus',component:ContactusComponent},
  {path:'ourteam',component:OurteamComponent},
  {path:'callus',component:CallusComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
