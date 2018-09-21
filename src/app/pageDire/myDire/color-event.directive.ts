import { Directive,ElementRef,Input,HostListener} from '@angular/core';

@Directive({
  selector: '[ColorEvent]'
})
export class ColorEventDirective {


  /*
  * @param colorName {String} 设置颜色的名称
  * */
  private colorName:string="deeppink";


  /*
  *  @param flag  {boolean}  设置颜色状态的初始值
  * */
  private flag:boolean=true;


  /*
  * @param element {DOM} 设置DOM元素初始化值
  * */
  private element:HTMLElement;



  /*
  * setColor 设置颜色
  * @param colorName 设置颜色的名称
  * */
  private setColor(colorName:string){
      this.element.style.color=colorName;
      this.element.style.fontSize='24px';
  }

  //动态传值
  @Input('ColorEvent') colorFont:string;
  constructor(private el:ElementRef) {
      this.element=el.nativeElement;//当前DOM元素
      this.setColor(this.colorName);//设置颜色
  }

  /*
  * 设置DOM元素的监听事件
  * */
  @HostListener("click") onClick(){
      this.flag=!this.flag;
      this.setColor(this.flag?"deeppink":"green");
  }



}
