import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  listArr:any[]=[
     {name:"组件",link:"../routemain/lazycomponent"},
     {name:"演示区二",link:"../routemain/home"},
     {name:"模板",link:"../routemain/pipeDemo"},
     {name:"指令",link:"../routemain/home"},
     {name:"依赖注入",link:"../routemain/home"},
     {name:"表单",link:"../routemain/templateform"},
     {name:"rxjs与服务",link:"../routemain/pushList"}
  ]

  public goRoute(linkPath,i){
      localStorage.setItem('myHash',i);
      this.route.navigate([linkPath],{queryParams:{id:i}})
  }



  constructor(private route:Router) { }

  ngOnInit() {}

}
