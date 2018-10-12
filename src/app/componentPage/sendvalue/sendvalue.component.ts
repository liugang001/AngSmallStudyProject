import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sendvalue',
  templateUrl: './sendvalue.component.html',
  styleUrls: ['./sendvalue.component.css']
})
export class SendvalueComponent implements OnInit {

  /*
  * 父组件向子组件传参
  * */
  //父组件默认传值定义
  private parentValue:number=0;
  //随机数初始化值
  private totalValue:number=0;
  //接受子组件传递过来的值
  private acceptFromSon:any;


  // 设置传参定时器发射函数，实时向子组件传递不同的参数
  private setPlaySend():void{
      setInterval(()=>{
          this.parentValue=Number.parseInt((Math.random()*200).toString());
          this.totalValue+=this.parentValue;
      },1000)
  }

  public acceptValue($event:Event){
      this.acceptFromSon=$event;
  }

  constructor() {}
  ngOnInit(){
      this.setPlaySend();
  }

}
