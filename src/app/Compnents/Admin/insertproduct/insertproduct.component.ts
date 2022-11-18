import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProudctApiService } from './../../../Services/proudct-api.service';

@Component({
  selector: 'app-insertproduct',
  templateUrl: './insertproduct.component.html',
  styleUrls: ['./insertproduct.component.css']
})
export class InsertproductComponent implements OnInit {

  constructor(private prdApiService:ProudctApiService,private router:Router) { 

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
  }
  ngOnInit(): void {
  }

}
