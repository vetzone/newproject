import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  logoURL = "https://www.svgimages.com/svg-image/s5/pets-care-icon-256x256.png";
  toggler = false;
  constructor() {
   }

  changeToggler(){
    this.toggler = !this.toggler;
  }
}
