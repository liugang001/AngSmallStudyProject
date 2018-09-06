import {Component, OnInit} from '@angular/core';
import 'jquery';
import 'ztree';
import {ActivatedRoute, Router} from '@angular/router';

declare var $: any;


@Component({
  selector: 'app-layui',
  templateUrl: './layui.component.html',
  styleUrls: ['./layui.component.css']
})
export class LayuiComponent implements OnInit {

  title:string='layui mode';
  idParam:string;
  tsParam:string;
  textsInfo:string="gang";
  constructor(private routerInfo:ActivatedRoute,private route:Router) {}

  //双向数据绑定
  getTextFromModel(text:string){
    console.log(text);
  }


  //点击事件函数
  public dottedAdd(){
      this.route.navigate(["./routemain/layui"],{queryParams:{id:45,ts:66}})
  }

  ngOnInit() {
     //参数快照
     let snapData=this.routerInfo.snapshot;
     this.idParam=snapData.queryParams['id'];
     this.tsParam=snapData.queryParams['ts'];
  }
}
