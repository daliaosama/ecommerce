import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/Models/card';
import { ICategory } from 'src/app/Models/icategory';
@Component({
  selector: 'app-order-parent',
  templateUrl: './order-parent.component.html',
  styleUrls: ['./order-parent.component.css']
})
export class OrderParentComponent implements OnInit {
  category:ICategory[];
  categID:number=0;
  Card:Card[]=[]
  receivedTotal1Price:number=0;
  receivecard:any;
  constructor() { 
    this.category=[
      {
        id:1,
        Name:'mobile',
      },
      {
        id:2,
        Name:'laptop'
      },
      {
       id:3,
       Name:'tv',
      },
      
    ];
  }
  onaddCard(Card:Card[])
  {
    this.Card=Card;
  }

  ngOnInit(): void {
  }
  ontotalPriceChanged(totalPrice:number){
    this.receivedTotal1Price=totalPrice;
}
Addcart(card:any){
  this.receivecard=card;
}
}
