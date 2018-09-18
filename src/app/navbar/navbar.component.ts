import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //定义存放路由列表的数据
  public routeList:any=[];

  //初始化加载 显示路由列表信息
  LoadRouteList(){
    this.Http.get("../../assets/fake/route.json").subscribe(res=>{
      let _res=res;
      this.routeList=_res.result[0].arrList;
    })
  }


  constructor(
    private Http:HttpClient
  ) {}



  ngOnInit() {
     this.LoadRouteList();
  }


}
