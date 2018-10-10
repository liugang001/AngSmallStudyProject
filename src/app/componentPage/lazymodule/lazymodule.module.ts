import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazymoduleRoutingModule } from './lazymodule-routing.module';
import { LazymoduleComponent } from './lazymodule.component';
import {AlertModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AlertModule.forRoot(),
    LazymoduleRoutingModule
  ],
  declarations: [LazymoduleComponent]
})
export class LazymoduleModule { }
