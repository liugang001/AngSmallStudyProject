import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDemoComponent } from './pipe-demo.component';
import {RouterModule} from '@angular/router';
import {ApplyWayPipe} from '../../pipe/apply-way.pipe';
import {PhonePipe} from '../../pipe/phone.pipe';
//路由配置设置
const pipeRoute=[
  {
    path:"",
    component:PipeDemoComponent,
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(pipeRoute),
    CommonModule
  ],
  declarations: [PipeDemoComponent,ApplyWayPipe,PhonePipe]
})
export class PipeDemoModule { }
