import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private prodService:ProductsService,private route:Router) { }
 
  ngOnInit(): void {
  }
addProduct(id:any,proname:any,price:any,quantity:any,catID:any,img:any)
{
this.prodService.addProduct(id,proname,price,quantity,catID,img)
//console.log(Number(catID))
this.route.navigate(["Order"])
}
}