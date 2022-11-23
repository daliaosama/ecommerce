import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProudctApiService {
  private httpOptions:{};


  constructor(private httpClient: HttpClient) { 
    this.httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
  }
  getAllProducts():Observable<IProduct[]>{
   return this.httpClient.get<IProduct[]>(`${environment.APIBaseURL}/products`);
  }
  getProductByCatId(CategoryID:number):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.APIBaseURL}/products?CategoryID=${CategoryID}`);
  }
  getProductById(pid:number):Observable<IProduct>{
    return this.httpClient.get<IProduct>(`${environment.APIBaseURL}/products/${pid}`);
  }
  addNewProduct(newPrd:IProduct):Observable<IProduct>{
    return this.httpClient.post<IProduct>(`${environment.APIBaseURL}/products`,JSON.stringify(newPrd),this.httpOptions)

  }
  
  
}
