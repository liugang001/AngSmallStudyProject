
import {CanDeactivate} from '@angular/router';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {RouteMainComponent} from '../routes/defend-route/route-main/route-main.component';
//路由的反激活守卫
/*
* 1.CanDeactivate接口有一个范型，指定当前组件的类型。
* 2.CanDeactivate方法第一个参数就是接口指定的范型类型的组件，根据这个要保护的组件的状态，或者调用方法来决定用户是否能够离开。
* */
@Injectable()
export class LeaveGuard  implements  CanDeactivate<RouteMainComponent>{
   constructor(private router:Router){}
   canDeactivate(component:RouteMainComponent):boolean{
      let flag=window.confirm("你确定要离开吗?")
      return flag;
   }
}
