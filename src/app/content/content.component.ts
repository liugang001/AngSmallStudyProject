import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  title:string='APP TItLES';
  name:string;
  age:number;
  arr:any;
  constructor() { }
  ngOnInit(){}
}
