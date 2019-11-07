import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  headerURL = "https://previews.123rf.com/images/vectorikart/vectorikart1601/vectorikart160100012/50917809-animal-pets-grooming-and-health-care-vector-flat-horizontal-header-banner-background-with-silhouette.jpg";
  route: string;

  constructor(location: Location, router: Router) {
    router.events.subscribe(val => {
      if (location.path() != "") {
        this.route = location.path();
      } else {
        this.route = "Home";
      }
    });
  }

  ngOnInit() {
  }

  checkPage(){
    if (this.route === "Home"){
      return (true)
    } else{
      return (false)
    }

  }


}