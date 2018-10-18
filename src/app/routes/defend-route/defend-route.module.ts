import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefendRouteComponent } from './defend-route.component';
import {RouterModule} from '@angular/router';
import {RouteLoginComponent} from './route-login/route-login.component';
import {RouteMainComponent} from './route-main/route-main.component';
import {DefendGuard} from '../../service/defend.guard';
import {LeaveGuard} from '../../service/leave.guard';
import {CookieService} from 'ngx-cookie-service';
//路由守卫
const DefendRoutes=[{
   path:"",
   component:DefendRouteComponent,
   children:[
      {
        path:"routeMain",
        component:RouteMainComponent,
        canActivate:[DefendGuard],
        canDeactivate:[LeaveGuard]
      },
      {
        path:"routeLogin",
        component:RouteLoginComponent
      },
      {
        path:"",
        redirectTo:"/routemain/defendRoute/routeMain",
        canActivate:[DefendGuard]
      }
   ]
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DefendRoutes),
  ],
  declarations: [DefendRouteComponent,RouteLoginComponent,RouteMainComponent],
  providers:[DefendGuard,LeaveGuard,CookieService]
})
export class DefendRouteModule { }
