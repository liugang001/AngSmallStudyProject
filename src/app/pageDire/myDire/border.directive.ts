import { Directive,HostBinding,HostListener} from '@angular/core';

@Directive({
  selector: '[Border]'
})
export class BorderDirective {

  /*
  * ①：为我们的指令取名为appRainbow
    ②：定义我们需要展示的所有可能的颜色
    ③：定义并用@HostBinding()装饰color和borderColor，用于设置样式
    ④：用@HostListener()监听宿主元素的keydown事件，为color和borderColor随机分配颜色
  * */

  private colorType:ColorType={
      colorName:""
  }
  //定义颜色的列表
  private colorList:Array<string>=[
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey','red','purple','green'
  ]
  @HostBinding("style.color") color:string;
  @HostBinding("style.borderColor") borderColor:string;
  constructor() {}
  //键盘事件绑定
  @HostListener("keydown") keydown(){
      let colorIndex=parseInt((Math.random()*this.colorList.length).toString());
      let colorName=this.colorList[colorIndex];
      console.log(colorName);
      this.colorType.colorName=colorName;
      this.color=this.borderColor=colorName;

  }

}

export class ColorType{
  colorName:string;
}
