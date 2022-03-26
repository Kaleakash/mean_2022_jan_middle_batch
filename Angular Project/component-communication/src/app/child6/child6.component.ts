import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-child6',
  templateUrl: './child6.component.html',
  styleUrls: ['./child6.component.css']
})
export class Child6Component implements OnInit {

  v?:number;
  constructor(public cc:CommonService) { }

  ngOnInit(): void {
    this.cc.currentData.subscribe(result=>this.v=result);
  }

}
