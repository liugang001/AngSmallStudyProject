import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LazymoduleComponent} from './lazymodule.component';

const routes: Routes = [{
    path:"lazycomponent",
    component:LazymoduleComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LazymoduleRoutingModule { }
