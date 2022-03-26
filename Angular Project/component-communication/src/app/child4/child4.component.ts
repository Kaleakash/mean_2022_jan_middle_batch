import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit {
  v:number=0;
  constructor(public cc:CommonService) { }

  ngOnInit(): void {
    this.cc.currentData.subscribe(result=>this.v=result);
  }

  fun() {
    this.cc.changeValue(this.v);
  }
}
