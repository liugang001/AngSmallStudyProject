import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RatingModule} from 'ngx-bootstrap';
import {RouterModule} from '@angular/router';
import { RatesRoutes } from './rates-routing.module';
import { RatesComponent } from './rates.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RatingModule.forRoot(),
    RouterModule.forChild(RatesRoutes),
    FormsModule
  ],
  declarations: [RatesComponent]
})
export class RatesModule {}
