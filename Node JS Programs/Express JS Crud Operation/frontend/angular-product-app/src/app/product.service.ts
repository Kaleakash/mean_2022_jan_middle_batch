import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }   // DI for HttpClient


  getAllProduct():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:9090/productDetails")
  }
}
