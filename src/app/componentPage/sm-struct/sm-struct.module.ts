import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmStructComponent } from './sm-struct.component';
import {RouterModule} from '@angular/router';
import { SmHeaderComponent } from './sm-header/sm-header.component';
import { SmLeftComponent } from './sm-left/sm-left.component';
import { SmMainComponent } from './sm-main/sm-main.component';
import {ShadowComponent} from '../shadow/shadow.component';

//设置路由
const structRoutes=[{
    path:"",
    component:SmStructComponent
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(structRoutes)
  ],
  declarations: [
    SmStructComponent,
    SmHeaderComponent,
    SmLeftComponent,
    SmMainComponent,
    ShadowComponent
  ]
})
export class SmStructModule { }
