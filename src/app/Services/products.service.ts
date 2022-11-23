import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  product:IProduct[];
  constructor() {
    this.product=[
      {id:1,Name:'Xiaomi',price:11748,Quantity:5,Img:'https://m.media-amazon.com/images/I/61RtZ8HMIYL._AC_SL1500_.jpg',CategoryID:1},
      {id:12,Name:'Samsung',price:11170,Quantity:0,Img:'https://m.media-amazon.com/images/I/71S3PeNu0SL._AC_SL1500_.jpg',CategoryID:1},
      {id:15,Name:'DellLaptop',price:17600,Quantity:1,Img:'https://m.media-amazon.com/images/I/91zKmiPmArS._AC_SL1500_.jpg',CategoryID:2},
      {id:17,Name:'LenovoLaptop',price:25000,Quantity:2,Img:'https://m.media-amazon.com/images/I/51wS1MaIigL._AC_SL1000_.jpg',CategoryID:2},
      {id:22,Name:'LGTV',price:8500,Quantity:0,Img:'https://m.media-amazon.com/images/I/71SCPEYWQbL._AC_SL1100_.jpg',CategoryID:3},
      {id:42,Name:'SamsungTV',price:9300,Quantity:3,Img:'https://m.media-amazon.com/images/I/41dtWpSSjOL._AC_SX679_.jpg',CategoryID:3}
    ];
   }
   //return all product
   getAllProducts():IProduct[]
   {
    return this.product;
   }
   getProductofCatID(CategoryID:number):IProduct[]
   {
    if(CategoryID==0) {
      return this.getAllProducts();
   }
  else{
    return this.product.filter(product=>product.CategoryID == CategoryID)
  }
}
getProductById(prdID:number):IProduct|undefined
{
return this.product.find(product=>product.id==prdID);
}
getProductsIDList():number[] {
  return this.product.map(prd=> prd.id);
}
addProduct(catId:number,id:number,prdname:string,quantity:number,price:number,img:string)
{
  let proud={id:id,Name:prdname,price:price,Quantity:quantity,Img:img,CategoryID:catId}
  this.product.push(proud);
}
// AddProduct(pro:IProduct)
// {
//   this.product=pro;
//   this.push(this.product)
// }
}
