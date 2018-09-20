import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dire',
  templateUrl: './dire.component.html',
  styleUrls: ['./dire.component.css']
})
export class DireComponent implements OnInit {

  /*
  * NGCLASS
  * */
  private classFlag:boolean;
  private classBool:boolean;
  private classType:string;
  private styleColor:number;
  private myInnerStyle:boolean;
  private textPairInput:string;
  private textSingleInput:string;
  //设置CLASS样式是否显示  其中active element classColor 是样式的CSS类名
  public setMyClass(){
      let classStyle={
         active:true,
         element:false,
         classColor:true
      };
      return classStyle;
  }
  //设置STYLE样式 其中 color font-size font-style是CSS内联样式的属性名称
  public setMyStyle(){
      let innerStyle={
          'color':"red",
          'font-size':"24px",
          'font-style':this.myInnerStyle?'italic':"normal"
      }
      return innerStyle;
  }


  constructor(){
      this.classFlag=true;
      this.classBool=true;
      this.classType="gang";
      this.styleColor=100;
      this.myInnerStyle=true;
      this.textSingleInput="数据的单向绑定";
      this.textPairInput="数据的双向绑定";
  }
  ngOnInit() {}

}
