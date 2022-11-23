import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Card } from 'src/app/Models/card';
import { ICategory } from 'src/app/Models/icategory';
import { CategoryApiService } from 'src/app/Services/category-api.service';
@Component({
  selector: 'app-order-parent',
  templateUrl: './order-parent.component.html',
  styleUrls: ['./order-parent.component.css']
})
export class OrderParentComponent implements OnInit,OnChanges {
  categor:ICategory[]=[];
  // category:ICategory[]
  categID:number=0;
  Card:Card[]=[]
  receivedTotal1Price:number=0;
 // @Input() receivedcategID:number=0;
  receivedcategID:number=0
  receivecard:any;
  constructor(private catservice:CategoryApiService) { 
    // this.category=[
    //   {
    //     id:1,
    //     Name:'mobile',
    //   },
    //   {
    //     id:2,
    //     Name:'laptop'
    //   },
    //   {
    //    id:3,
    //    Name:'tv',
    //   },
      
    // ];
  }
  ngOnChanges(): void {
    
  }
  onaddCard(Card:Card[])
  {
    this.Card=Card;
  }

  ngOnInit(): void {
    if(this.receivedcategID==0)
    {
    this.catservice.getAllCateogories().subscribe(cat=>{this.categor=cat})
    }
    else{
      this.catservice.getCategoryByID(this.receivedcategID).subscribe(cat=>{this.categor=cat;});
    }  
  }
  ontotalPriceChanged(totalPrice:number){
    this.receivedTotal1Price=totalPrice;
}
Addcart(card:any){
  this.receivecard=card;
}
}
