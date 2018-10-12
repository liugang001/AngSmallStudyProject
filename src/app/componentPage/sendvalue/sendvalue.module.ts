import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { SendValueRoutes } from './sendvalue-routing.module';
import { SendvalueComponent } from './sendvalue.component';
import {SonvalueComponent} from '../sonvalue/sonvalue.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SendValueRoutes)
  ],
  declarations: [SendvalueComponent,SonvalueComponent]
})
export class SendvalueModule { }
