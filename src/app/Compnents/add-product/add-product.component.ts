import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private prodService:ProductsService) { }
 
  ngOnInit(): void {
  }
addProduct(id:string,proname:string,price:string,quantity:string,image:string,catID:string)
{
let Id=Number(id)
let Price=Number(price)
let Quantity=Number(quantity)
let CatID=Number(catID)
this.prodService.product.push({id:Id,Name:proname,price:Price,Quantity:Quantity,Img:image,CategoryID:CatID})
}
}