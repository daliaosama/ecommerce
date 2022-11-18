import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/Models/icategory';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {

  constructor(private httpClient:HttpClient) { 

  }
  getAllCateogories():Observable<ICategory[]>{
   return this.httpClient.get<ICategory[]>(`${environment.APIBaseURL}/categories`);
  }
}
