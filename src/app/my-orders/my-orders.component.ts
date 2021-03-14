import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  @Input() orderFlag = false;

  orderId = 12345678;
  orderDetails = "Madeup White Cotton Blend Checkered Slim Fit Shirt";
  orderAddress = "Express Delivery by Sat, Aug 30";
  cardOption = "Credit Card Payment";
  amount = "1,899";
  Status = "Pending";
  deliverStatus = "Delivered"


  constructor() { }

  ngOnInit(): void {
  }

}
