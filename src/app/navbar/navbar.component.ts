import { Component, OnInit,Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() hashParams:any;
  //定义存放路由列表的数据
  private routeList:any=[];

  //初始化加载 显示路由列表信息
  LoadRouteList(index:number){
    this.Http.get("../../assets/fake/route.json").subscribe(res=>{
      this.routeList=res['result'][index].arrList;
    })
  }


  constructor(
    private Http:HttpClient,
  ) {}



  ngOnInit() {
    let hashIndex=Number.parseInt(this.hashParams);
    if(!hashIndex){
      hashIndex=parseInt(localStorage.getItem('myHash'));
    }
    this.LoadRouteList(hashIndex);
  }
}
