import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  profile_flag= false;
  order_flag= true;
  home_flag=false;
  nav_button = false;

  OnProfile(){
    this.profile_flag= true;
    this.order_flag= false;
    console.log(this.profile_flag);
  }

  OnOrder(){
    this.profile_flag= false;
    this.order_flag= true;
  }

  onHome(){
    this.profile_flag= false;
    this.order_flag= false;
    this.home_flag=true;
    console.log(this.home_flag);
  }

  navOpen(){
    this.nav_button=true;
  }

}
