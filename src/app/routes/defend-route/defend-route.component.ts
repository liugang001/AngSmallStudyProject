import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-defend-route',
  templateUrl: './defend-route.component.html',
  styleUrls: ['./defend-route.component.css'],
  providers:[CookieService]
})
export class DefendRouteComponent implements OnInit {

  constructor(private cookieService:CookieService,private router:Router) {}
  //设置cookie
  public setMyCookie(){
     this.cookieService.set("userId","123456789");
     console.log("设置cookie userId 成功")
  };
  //清除cookie
  public clearMyCookie(){
    this.cookieService.delete('userId');
    console.log("删除cookie userId 成功")
  }
  //通过cookie判断
  public gotoRouteByCookie(){
      if(this.cookieService.get("userId")){
          this.router.navigate(["./routemain/defendRoute/routeMain"])
      }else{
          this.router.navigate(["./routemain/defendRoute/routeLogin"])
      }
  }


  ngOnInit(){}

}
