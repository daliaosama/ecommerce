import { Component, OnInit,Input, EventEmitter ,Output, OnChanges} from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/Models/card';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';
import { Store } from './../../Models/store';
import { ProudctApiService } from './../../Services/proudct-api.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnChanges {
  prdlist:IProduct[]=[];
  storeClass:Store;
  //product:IProduct[];
  category:ICategory[];
  ClientName:string;
  IsPurchased:boolean=true;
 
 @Input() receivedcategID:number=0;
 totalPrice:number=0;
 cart!:Card;
 card:Card[]=[];
// @Output() totalPriceChanged:EventEmitter<number>;
 @Output() addCard!:EventEmitter<Card[]>;
 //inject inside constructor
  constructor(private prdService:ProductsService,private route:Router,private proudctApiService:ProudctApiService) {
    this.ClientName="Dalia";
    this.storeClass=new Store('TechnoStore','assets/techno.jpg',['Minia','Sohag','Qena']);
   // this.totalPriceChanged=new EventEmitter<number>();
   this.addCard=new EventEmitter<Card[]>();
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
    // this.product=[
    //   {ID:1,Name:'Xiaomi',price:11748,Quantity:5,Img:'assets/xiaomi.jpg',CategoryID:1},
    //   {ID:12,Name:'Samsung',price:11170,Quantity:0,Img:'assets/samsung.jpg',CategoryID:1},
    //   {ID:15,Name:'DellLaptop',price:17600,Quantity:1,Img:'assets/laptopdell.jpg',CategoryID:2},
    //   {ID:17,Name:'LenovoLaptop',price:25000,Quantity:2,Img:'assets/lenovo.jpg',CategoryID:2},
    //   {ID:22,Name:'LGTV',price:8500,Quantity:0,Img:'assets/lg.jpg',CategoryID:3},
    //   {ID:42,Name:'SamsungTV',price:8500,Quantity:3,Img:'assets/samsungtv.jpg',CategoryID:3}
    // ];
   }
   toggleImg(){
    this.IsPurchased=!this.IsPurchased
 }
  ngOnInit(): void {
    // this.prdlist= this.prdService.getProductofCatID(this.receivedcategID)
  }
  ngOnChanges(): void {
  //this.prdlist= this.prdService.getProductofCatID(this.receivedcategID)
  if(this.receivedcategID==0){
    this.proudctApiService.getAllProducts().subscribe(prd=>{this.prdlist=prd});
  }
  else{
    this.proudctApiService.getProductByCatId(this.receivedcategID).subscribe(prdlist=>{this.prdlist=prdlist;});
  }
  
    // this.getProduct()
  }
  openPrdDetails(prdID:number)
  {
   this.route.navigate(['Products',prdID])
  }
  // private getProduct()
  // {
  //   if(this.receivedcategID==0)
  //   {
  //     this.prdlist =Array.from(this.product);
  //     return;
  //   }
  //   //copy from array to another array
  
  //  this.prdlist= this.product.filter((product)=>product.CategoryID==this.receivedcategID)
  // }
  // updatePrice(prdPrice:number,itemsCount:any)
  // {
  //  this.totalPrice += (prdPrice * +itemsCount)
  //  //fireevent
  //  this.totalPriceChanged.emit(this.totalPrice);
  // }
  addCart(product:IProduct,itemsCount:any){
    for (let x of this.prdlist){
      if(x.id==product.id){
        let cou = +x.Quantity
        let co=+itemsCount
        let diff=cou-co
        x.Quantity =diff
        
        
      }
    }
    if(this.card.length>0){
      for (let x of this.card){
        if(x.id==product.id){
          let cou = +x.Count
          let co=+itemsCount
          let sum=cou+co
          x.Count =sum
          this.addCard.emit(this.card)
          return;
        }
      }
    }
  
      this.cart={
        id:product.id,
        name:product.Name,
        price:product.price,
        Count:itemsCount,
      }
    
    this.card.push(this.cart)
    this.addCard.emit(this.card)
    
    
    
  }
}
