import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public profile_flag= false;
  public order_flag= true;
  public home_flag=false;
  public nav_button = false;
  public mobile_profile = false;

  OnProfile(){
    this.profile_flag= true;
    this.order_flag= false;
    this.mobile_profile = true;
  }

  OnOrder(){
    this.profile_flag= false;
    this.order_flag= true;
    this.mobile_profile = false;
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
