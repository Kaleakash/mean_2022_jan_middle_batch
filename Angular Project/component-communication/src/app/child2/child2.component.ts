import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  names:Array<string>=[]
  constructor(public ss:SharedService) { }

  ngOnInit(): void {
    this.names=this.ss.getValue();
  }

}
