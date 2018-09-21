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

//指令
import {DireComponent} from './pageDire/direProperty/dire.component';
import {DireMixComponent} from './pageDire/direMix/dire-mix.component';
import {CustomDireComponent} from './pageDire/direCustom/custom-dire.component';


const appRoutes:Routes=[
  {path:"login",component:LoginComponent},
  {path:"routemain",component:RoutemainComponent,children:[
      {path:"home",component:HomeComponent},
      {path:"image",component:ImagesComponent},
      {path:"text",component:TextsComponent},
      {path:"ngContent/:id/:ts",component:ContentComponent},
      {path:"layui",component:LayuiComponent},
      {path:"direProperty",component:DireComponent},//属性型指令
      {path:"direMix",component:DireMixComponent},//结构型指令
      {path:"direCus",component:CustomDireComponent}
   ]},
  {path:"",redirectTo:"/login",pathMatch:"full"},
  {path:"**",component:ErrorComponent}
];

export const Routing:ModuleWithProviders=RouterModule.forRoot(
  appRoutes,
  { useHash: true}
);

