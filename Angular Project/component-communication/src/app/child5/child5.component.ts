import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-child5',
  templateUrl: './child5.component.html',
  styleUrls: ['./child5.component.css']
})
export class Child5Component implements OnInit {

  v:number=0;
  constructor(public cc:CommonService) { }

  ngOnInit(): void {
    this.cc.currentData.subscribe(result=>this.v=result);
  }

  fun() {
    this.cc.changeValue(this.v);
  }
}
