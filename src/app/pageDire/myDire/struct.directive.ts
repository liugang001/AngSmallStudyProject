import { Directive,TemplateRef,ViewContainerRef,Input} from '@angular/core';

/*
*1. TemplateRef用来访问组件的模板
*2. ViewContainerRef可作为视图内容渲染器，将模板内容插入至DOM中。
* 在指令构造函数中，需要将他们作为依赖注入，赋值给指令的变量
* */

@Directive({
  selector: '[gangStruct]'
})
export class StructDirective {

  @Input("gangStruct")
  set condition(newCondition:boolean){
      if(!newCondition){
          //添加模板
          this.viewContainerReg.createEmbeddedView(this.templateRef);
          console.log(newCondition)
      }else{
          //移除模板
          this.viewContainerReg.clear();
          console.log('clear');
      }
  }


  constructor(
    private templateRef:TemplateRef<any>,
    private viewContainerReg:ViewContainerRef
  ) {}

}
