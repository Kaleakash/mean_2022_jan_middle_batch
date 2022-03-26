import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ViewChild } from '@angular/core';
import { Child1Component } from './child1/child1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked{
  pname:string="Raj Deep";
  cAge:number=0;
  cDesg:string=""

  @ViewChild(Child1Component)
  childRef?:Child1Component;    // DI for Child component 
                      // with this we can access all properties and behaviour of child component. 
  ngAfterViewChecked(): void {
    if(this.childRef!=null){
      this.cDesg= this.childRef?.childDesg;
    }  
  }
}
