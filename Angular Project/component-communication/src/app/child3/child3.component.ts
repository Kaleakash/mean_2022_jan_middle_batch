import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
  names:Array<string>=["Reeta","Meeta","Veeta"]
  constructor(public ss:SharedService) { }

  ngOnInit(): void {
    this.ss.setValue(this.names);
  }

}
