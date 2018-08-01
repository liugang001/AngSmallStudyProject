import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {Routing} from  "./app.routes";
import {CommonModule} from '@angular/common';
import {LazyLoadImageModule} from "ng-lazyload-image";
import {ElModule} from 'element-angular/release/element-angular.module';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImagesComponent } from './images/images.component';
import { TextsComponent } from './texts/texts.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './common/error/error.component';
import { FilterPipe } from './pipe/filter.pipe';
import { GetdatePipe } from './pipe/getdate.pipe';
import { LoginComponent } from './login/login.component';
import { RoutemainComponent } from './routemain/routemain.component';
import { LayuiComponent } from './layui/layui.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    ImagesComponent,
    TextsComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    FilterPipe,
    GetdatePipe,
    RoutemainComponent,
    LayuiComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    LazyLoadImageModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ElModule.forRoot(),
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
