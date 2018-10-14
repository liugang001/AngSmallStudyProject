import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  constructor() { }

  //日期格式化
  public timeDes:number=new Date().getTime();

  //数字截取
  public myNumber:number=2.4645;

  //字母转化大写
  public mySmEngLish:string="this is a sentence";

  //字母转换为小写
  public myBgEnglish:string="My APPLICATION";

  //字符串截取
  public HellowParking:string="HellowParking";

  //创建数据对象
  public Project:any={
      name:"lg",address:"sichuangsheng"
  }

  //创建列表模型数组元素
  public myTableList:Person[]=[
    {name:"张三",phone:"13466773478",applyWay:1},
    {name:"李四",phone:"12348152738",applyWay:0},
    {name:"王五",phone:"15677893344",applyWay:2},
    {name:"赵六",phone:"18977637233",applyWay:3},
    {name:"李八",phone:"15966382233",applyWay:0},
    {name:"孙九",phone:"18083832356",applyWay:3},
  ]




  ngOnInit() {}

}

export class Person{
    constructor(
        public name:string,
        public phone:string,
        public applyWay:number
    ){}
}

