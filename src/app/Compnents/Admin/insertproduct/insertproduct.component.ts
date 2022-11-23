import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProudctApiService } from './../../../Services/proudct-api.service';
import { CategoryApiService } from 'src/app/Services/category-api.service';
import { ICategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-insertproduct',
  templateUrl: './insertproduct.component.html',
  styleUrls: ['./insertproduct.component.css']
})
export class InsertproductComponent implements OnInit {
newprd:IProduct={} as IProduct;
category:ICategory[]=[];
receivedcategID:number=0
  constructor(private prdApiService:ProudctApiService,private router:Router,private categoryApi:CategoryApiService) { 

  }
  insertNewProduct(){
    // let testProduct:IProduct={
    //   id:40,
    //   Name:"HUAWEI P50",
    //   price:23400,
    //   Quantity:5,
    //   Img:"https://m.media-amazon.com/images/I/51tNBbfB4DL._AC_SL1000_.jpg",
    //   CategoryID:1
    // };
    // this.prdApiService.addNewProduct(testProduct).subscribe(prd=>{
    //   this.router.navigate(['/Order']);
    // })
    this.prdApiService.addNewProduct(this.newprd).subscribe(prd=>{this.router.navigate(['/Order'])});
    
  }
  ngOnInit(): void {
    if(this.receivedcategID==0)
    {
    this.categoryApi.getAllCateogories().subscribe(cat=>{this.category=cat})
    }
    else{
      this.categoryApi.getCategoryByID(this.receivedcategID).subscribe(cat=>{this.category=cat;});
    }  
  }

}
