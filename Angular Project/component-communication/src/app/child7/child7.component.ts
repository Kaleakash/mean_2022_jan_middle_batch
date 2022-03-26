import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-child7',
  templateUrl: './child7.component.html',
  styleUrls: ['./child7.component.css']
})
export class Child7Component implements OnInit {

  v?:number;
  constructor(public cc:CommonService) { }

  ngOnInit(): void {
    this.cc.currentData.subscribe(result=>this.v=result);
  }

}
