import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatesRoutingModule } from './rates-routing.module';
import { RatesComponent } from './rates.component';
import {RatingModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RatingModule.forRoot(),
    RatesRoutingModule
  ],
  declarations: [RatesComponent]
})
export class RatesModule { }
