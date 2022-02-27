import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
productRef = new FormGroup({
  pid : new FormControl(),
  pname : new FormControl(), 
  price : new FormControl(),
  url : new FormControl()
})
  products:Array<Product>=[];
  storeMsg:string="";
  constructor(public pser:ProductService) { } //DI for service class 

  // life cycle method of component which call only once after component loaded..
  ngOnInit(): void {
    this.getAllProductDetails();
  }

  getAllProductDetails(){
    this.pser.getAllProduct().subscribe(result=>this.products=result);
  }

  storeProduct(){
    let product = this.productRef.value;
    //console.log(product);
    this.pser.storeProductInfo(product).subscribe(result=>this.storeMsg=result,
      error=>console.log(error),
      ()=>this.getAllProductDetails());
  }


}
