import { NavbarComponent } from './core/navbar/navbar.component';
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
import { CloginComponent } from './clogin/clogin.component';
import { SignUpComponent } from './sign-up/SignUpComponent';
import { FooterComponent } from './core/footer/footer.component';
import { HeadComponent } from './core/head/head.component';
import { HomeComponent } from './core/home/home.component';


@NgModule({
  declarations: [

    AppComponent,
    InfoComponent,
    AboutusComponent,
    ContactusComponent,
    OurteamComponent,
    CallusComponent,
    ProfileComponent,
    CloginComponent,
    SignUpComponent,
    NavbarComponent,
    FooterComponent,
    HeadComponent,
    HomeComponent,
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
