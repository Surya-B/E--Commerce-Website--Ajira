import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  home_footer=true;

  shirtName = "Printed Polo T-Shirt";
  Amount = "1,499.00";

  constructor() { }

  ngOnInit(): void {
  }

}
