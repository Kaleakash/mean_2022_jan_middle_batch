import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input()        
  parentName:string=""  // normal variable use to access the value of 
                        // parent variable. 
  childAge:number =21;

  @Output()
  eventRef = new EventEmitter<number>();                     
  childDesg:string ="Tester"; 
  constructor(public ss:SharedService) { }
  ngOnInit(): void {
    //console.log(pname);
    this.ss.setValue(this.names);     // set array value.
  }
  passValue() : void {
    this.eventRef.emit(this.childAge); 
  }

  names:Array<string>=["Raj","Ravi","Ramesh","Rajesh"];


}
