import { Component, OnInit } from '@angular/core';
import {AuthService, SocialUser } from "angularx-social-login";
import {FacebookLoginProvider, GoogleLoginProvider} from "angularx-social-login";


@Component({
  selector: 'app-callus',
  templateUrl: './callus.component.html',
  styleUrls: ['./callus.component.css']
})
export class CallusComponent implements OnInit {
   user: SocialUser;
   loggedIn:boolean;
  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.authService.authState.subscribe((user)=>{
      this.user = user;
      this.loggedIn = (user != null);
    })
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  signOut(): void {
    this.authService.signOut();
    this.user = {};
  }
}
