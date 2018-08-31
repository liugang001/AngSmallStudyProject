
//创建路由配置文件
import { ImagesComponent } from './images/images.component';
import { TextsComponent } from './texts/texts.component';
import { HomeComponent } from './home/home.component';
import {ErrorComponent} from './common/error/error.component';
import {LoginComponent} from './login/login.component';
import {RoutemainComponent} from './routemain/routemain.component';
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ContentComponent} from './content/content.component';

const appRoutes:Routes=[
  {path:"login",component:LoginComponent},
  {path:"routemain",component:RoutemainComponent,children:[
      {path:"home",component:HomeComponent},
      {path:"image",component:ImagesComponent},
      {path:"text",component:TextsComponent},
      {path:"ngContent",component:ContentComponent}
   ]},
  {path:"",redirectTo:"/routemain/home",pathMatch:"full"},
  {path:"**",component:ErrorComponent}
];

export const Routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);
