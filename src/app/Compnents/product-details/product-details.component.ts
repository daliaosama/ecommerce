import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';
import { Location } from '@angular/common';
import { ProudctApiService } from 'src/app/Services/proudct-api.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit,OnChanges {
  prd:IProduct|undefined=undefined;
  prdIDsList:number[] = [];
  currentPrdID:number=0;
  currentIndex:number=0;
  prdlist!:IProduct;

  constructor(private ProductsService: ProductsService,private activatedRoute:ActivatedRoute,
    private location:Location,private router:Router ,private proudctApiService:ProudctApiService) { 

  }
  ngOnChanges(): void {
    //this.proudctApiService.getProductById(this.currentPrdID).subscribe(prdIDsList=>{this.prdlist=prdIDsList;});

  }

  ngOnInit(): void {
    //this.prdIDsList= this.ProductsService.getProductsIDList();
//  this.activatedRoute.snapshot.paramMap.get('pid');
//   this.activatedRoute.snapshot.paramMap.get('pid')?Number(this.activatedRoute.snapshot.paramMap.get('pid')):0;
   this.activatedRoute.paramMap.subscribe(paramMap =>{
   this.currentPrdID=(paramMap.get('pid'))?Number(paramMap.get('pid')):0;
   this.proudctApiService.getProductById(this.currentPrdID).subscribe(prdIDsList=>{this.prdlist=prdIDsList
    console.log(this.prdlist) });
  //  let foundPrd= this.ProductsService.getProductById(this.currentPrdID);
  })
 
  
// let foundPrd=this.proudctApiService.getProductById(this.currentPrdID).subscribe(prdIDsList=>{this.prdlist=prdIDsList;});
  //  if(foundPrd)
  //  {
  //   this.prd=foundPrd;
  //  }
  //  else{
  //   alert('product not found')
  //   this.location.back();
  //  }})}
  //  }
  // }
   console.log(this.currentIndex);
  // getProductIDList():number[]
  // {
  //   return this.prdIDsList.
  this.proudctApiService.getAllProducts().subscribe(prdList=>{
    this.prdIDsList=prdList.map(prd=>prd.id)
  })


  }
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
