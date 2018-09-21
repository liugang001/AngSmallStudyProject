import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dire-mix',
  templateUrl: './dire-mix.component.html',
  styleUrls: ['./dire-mix.component.css']
})
export class DireMixComponent implements OnInit {

  private showText:boolean;//文本内容
  private colorName:string//颜色索引
  public jsonArrList:Array<Object>=[
     {
        'name':"张三",
        "age":22,
        "address":"四川省",
        "love":["足球","排球"],
         "id":"20029390302003"
     },
     {
       'name':"李四",
       "age":24,
       "address":"安徽省",
       "love":["橄榄球","手球"],
       "id":"95588445555778"
     },
     {
       'name':"王五",
       "age":25,
       "address":"广东省",
       "love":["足球",'篮球','曲棍球'],
       "id":"46884823873666"
     },
     {
       'name':"赵六",
       "age":21,
       "address":"浙江省",
       "love":["冰壶球",'碰碰车','射箭'],
       "id":"8874554589988"
     },
     {
       'name':"孙八",
       "age":21,
       "address":"江苏省",
       "love":['自行车','摄影','记忆密码'],
       "id":"1002557887878"
     }
  ];

  //删除事件
  public cancelEvent(id){
     alert(`id编号：${id}`);
  }

  //for循环ID追踪器
  public trackById(index,item){
    return item.id
  }


  constructor() {
      this.colorName="blue";
      this.showText=true;
  }
  ngOnInit() {}

}
