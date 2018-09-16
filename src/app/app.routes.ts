//创建路由配置文件
import { ImagesComponent } from './images/images.component';
import { TextsComponent } from './texts/texts.component';
import { HomeComponent } from './home/home.component';
import {ErrorComponent} from './common/error/error.component';
import {LoginComponent} from './login/login.component';
import {LayuiComponent} from './layui/layui.component';
import {RoutemainComponent} from './routemain/routemain.component';
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ContentComponent} from './content/content.component';

//演示区3
import {DireComponent} from './pageDire/dire/dire.component';

const appRoutes:Routes=[
  {path:"login",component:LoginComponent},
  {path:"routemain",component:RoutemainComponent,children:[
      {path:"home",component:HomeComponent},
      {path:"image",component:ImagesComponent},
      {path:"text",component:TextsComponent},
      {path:"ngContent/:id/:ts",component:ContentComponent},
      {path:"layui",component:LayuiComponent},
      {path:"dire",component:DireComponent}
   ]},
  {path:"",redirectTo:"/login",pathMatch:"full"},
  {path:"**",component:ErrorComponent}
];

export const Routing:ModuleWithProviders=RouterModule.forRoot(
  appRoutes,
  { useHash: true}
);

