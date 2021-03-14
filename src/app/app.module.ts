import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { FooterComponent } from './footer/footer.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { PopViewComponent } from './pop-view/pop-view.component';


@NgModule({
  declarations: [
    AppComponent,
    MyOrdersComponent,
    FooterComponent,
    MyProfileComponent,
    HomeViewComponent,
    PopViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
