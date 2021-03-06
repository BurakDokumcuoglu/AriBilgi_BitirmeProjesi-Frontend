import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  apiUrl = 'https://localhost:44354/api/';

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<Product[]> {
    let newPath=this.apiUrl+'products/getall';
    return this.httpClient.get<Product[]>(newPath);
  }

  getProductsByCategory(categoryId:number):Observable<Product[]> {
    let newPath=this.apiUrl+'products/getbycategory?categoryId='+categoryId;
    return this.httpClient.get<Product[]>(newPath);
  }
}
