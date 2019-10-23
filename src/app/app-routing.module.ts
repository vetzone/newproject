import { CallusComponent } from './core/info/callus/callus.component';
import { OurteamComponent } from './core/info/ourteam/ourteam.component';
import { ContactusComponent } from './core/info/contactus/contactus.component';
import { AboutusComponent } from './core/info/aboutus/aboutus.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'ourteam',component:OurteamComponent},
  {path:'callus',component:CallusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
