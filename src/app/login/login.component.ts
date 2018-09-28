import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

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
     {name:"依赖注入",link:"../routemain/home"},
     {name:"表单",link:"../routemain/home"}
  ]

  public goRoute(linkPath,i){
      localStorage.setItem('myHash',i);
      this.route.navigate([linkPath],{queryParams:{id:i}})
  }



  constructor(private route:Router) { }

  ngOnInit() {}

}
