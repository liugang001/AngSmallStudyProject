import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  listArr:any[]=[
     {name:"演示区一",link:"../routemain/home"},
     {name:"演示区二",link:"../routemain/home"},
     {name:"演示区三",link:"../routemain/home"},
     {name:"指令",link:"../routemain/home"},
     {name:"演示区五",link:"../routemain/home"},
  ]




  constructor() { }

  ngOnInit() {}

}
