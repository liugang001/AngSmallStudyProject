import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class RatesComponent implements OnInit {

  //设置星星被选中的数量
  private rate:number;
  //设置星星的总数量
  private max:number;
  //设置星星是否可以点击
  private isReadonly:boolean;
  //设置百分比数字
  private percent:number;
  //初始化赋值操作  只读模式星星显示
  private loadInitStar(rate:number,max:number,isReadonly:boolean):void{
      this.rate=rate;
      this.max=max;
      this.isReadonly=isReadonly;
      this.percent=rate*10;
  }
  //是否开启只读开关
  public switchReadOnly():boolean{
      return this.isReadonly=!this.isReadonly;
  }

  //当鼠标移动到上面显示分数
  public hoveringOver(val:number):void{
      this.rate=val;
      this.percent=(val/this.max)*100;
  }

  //将打分重置为无打分的默认状态
  public resetInit():void{
      this.rate=0;
      this.percent=0;
  }



  constructor() {}

  ngOnInit() {
    //初始化加载星星数量
    this.loadInitStar(5,10,true)
  }

}

