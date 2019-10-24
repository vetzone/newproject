import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './core/info/info.component';
import { AboutusComponent } from './core/info/aboutus/aboutus.component';
import { ContactusComponent } from './core/info/contactus/contactus.component';
import { OurteamComponent } from './core/info/ourteam/ourteam.component';
import { RouterModule } from '@angular/router';
import { CallusComponent } from './core/info/callus/callus.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from "./sign-up/SignUpComponent";


@NgModule({
  declarations: [
  
    AppComponent,
    InfoComponent,
    AboutusComponent,
    ContactusComponent,
    OurteamComponent,
    CallusComponent,
    ProfileComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
