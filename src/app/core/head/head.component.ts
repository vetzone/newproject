import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  headerURL = "https://previews.123rf.com/images/vectorikart/vectorikart1601/vectorikart160100012/50917809-animal-pets-grooming-and-health-care-vector-flat-horizontal-header-banner-background-with-silhouette.jpg"

  constructor() { }

  ngOnInit() {
  }

}
