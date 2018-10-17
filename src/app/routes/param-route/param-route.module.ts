import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParamRouteComponent } from './param-route.component';
import {RouterModule} from '@angular/router';
import { RouteListComponent } from './route-list/route-list.component';
import { RouteDetailComponent } from './route-detail/route-detail.component';

const routeParam=[
  {
    path:"",
    component:ParamRouteComponent,
    children:[
        {path:"tableList",component:RouteListComponent},
        {path:"tableDetail/:id",component:RouteDetailComponent},
        {path:"",redirectTo:"/routemain/gotoRoute/tableList"}
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routeParam)
  ],
  declarations: [ParamRouteComponent, RouteListComponent, RouteDetailComponent]
})
export class ParamRouteModule { }
