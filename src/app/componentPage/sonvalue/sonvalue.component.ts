import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sonvalue',
  templateUrl: './sonvalue.component.html',
  styleUrls: ['./sonvalue.component.css']
})
export class SonvalueComponent implements OnInit {

  //父组件向子组件传参 自定义属性 +@Input
  //子组件向父组件传参 自定义事件 +@output
  @Input() value:number;
  @Input() total:number;
  @Output() myValueEvent:EventEmitter<any>=new EventEmitter();
  private arrNameList=['LG','GL','LIUGANG'];
  private index=0;
  private timer=null;

  /*
  * 子组件向父组件传参
  * */
  public sendParent():any{
      clearInterval(this.timer);
      this.timer=setInterval(()=>{
          if(this.index>this.arrNameList.length-1) {
             this.index=0;
          }
          this.myValueEvent.emit({'name':this.arrNameList[this.index],"age":Number.parseInt((Math.random()*100).toString())});
          this.index++;
      },600)
  }

  constructor() {}


  ngOnInit() {}

}
