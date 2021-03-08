import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 
  @Input() profile_footer = false;
  @Input() home_footer = false;
  @Input() order_footer = false;
  constructor() { 
  }

  ngOnInit(): void {
  }

}
