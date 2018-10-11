import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RatingModule} from 'ngx-bootstrap';
import { RatesRoutingModule } from './rates-routing.module';
import { RatesComponent } from './rates.component';
 import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RatingModule.forRoot(),
    FormsModule,
    RatesRoutingModule
  ],
  declarations: [RatesComponent]
})
export class RatesModule { }
