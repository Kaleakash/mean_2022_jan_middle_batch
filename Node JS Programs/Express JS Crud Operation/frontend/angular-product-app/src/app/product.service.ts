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

  // by default all HttpClient method return type data consider as json (type default responseType is json )
  // if return type is text we have to use 3rd parameter 
  // post method take 2 parameter, 1st parameter url and 2nd parameter data in json format. 
  storeProductInfo(product:Product):Observable<string>{
    return this.http.post("http://localhost:9090/productStore",product,{responseType:'text'});
  }


  deleteProductById(pid:number):Observable<string>{
    return this.http.delete("http://localhost:9090/deleteProductInfo/"+pid,{responseType:'text'});
  }
  
  updateProduct(product:any):Observable<string>{
    return this.http.put("http://localhost:9090/updateProductInfo",product,{responseType:"text"});
  }
}
