import { Directive,ElementRef,Input} from '@angular/core';
/*
 * ElementRef：这个类可以用来在宿主标签里面注入其他标签的引用（不仅仅局限于DOM）。
   Directive：对于自己定义的新指令，可以用这个装饰器来添加一些额外的元数据。
 * */
@Directive({
  selector: '[MyColor]'
})
export class MyColorDirective {


  /*
  * @param el {ElementDOM} 元素的DOM节点
  * */
  private el:HTMLElement;

  /*
  * @param colorDefault {String} 默认的颜色值 如果用户没有动态传入值
  * */
  private colorDefault:string='red';


  /*
  * setStyle 设置颜色的样式方法设置
  * @param colorName {String} 设置DOM元素的颜色值
  * */
  private setStyle(colorName:string){
    let element=this.el
    element.style.fontSize="24px";
    element.style.color=colorName;
  }


  /*
  * 动态改变DOM元素的样式----
  * */
  @Input('MyColor')
  set fontColor(colorName:string){
      this.setStyle(colorName);
  }


  constructor(private element:ElementRef) {
      //获取DOM元素本身
      this.el=element.nativeElement;
      //当组件被激活 设置DOM元素的默认样式
      this.setStyle(this.colorDefault);
  }



}
