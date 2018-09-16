import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() routeList:any;



  numStart:number=100;
  numEnd:number=200;
  constructor() { }

  ngOnInit() {
    console.log(this.routeList);
  }

}
