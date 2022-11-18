import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  prd:IProduct|undefined=undefined;
  prdIDsList:number[] = [];
  currentPrdID:number=0;
  currentIndex:number=0;
  constructor(private ProductsService: ProductsService,private activatedRoute:ActivatedRoute,
    private location:Location,private router:Router) { 

  }

  ngOnInit(): void {
    this.prdIDsList= this.ProductsService.getProductsIDList();
    // let sendProductId=this.activatedRoute.snapshot.paramMap.get('pid');
    // let sendProductId:number=(this.activatedRoute.snapshot.paramMap.get('pid'))?Number(this.activatedRoute.snapshot.paramMap.get('pid')):0;
   this.activatedRoute.paramMap.subscribe(paramMap =>{
   this.currentPrdID=(paramMap.get('pid'))?Number(paramMap.get('pid')):0;
   let foundPrd= this.ProductsService.getProductById(this.currentPrdID);
   if(foundPrd)
   {
    this.prd=foundPrd;
   }
   else{
    alert('product not found')
    this.location.back();
   }})}
  //  }
  // }
  
  // getProductIDList():number[]
  // {
  //   return this.prdIDsList.
  // }
  prevFunc()
  {
    this.currentIndex=this.prdIDsList.findIndex((item)=>item==this.currentPrdID);
  
    this.router.navigate(['/Products',this.prdIDsList[--this.currentIndex]]);
  }
  nextFunc()
  {
    this.currentIndex=this.prdIDsList.findIndex((item)=>item==this.currentPrdID);
    this.router.navigate(['/Products',this.prdIDsList[++this.currentIndex]]);
  }
  goBack()
  {
    this.location.back();
  }
}
