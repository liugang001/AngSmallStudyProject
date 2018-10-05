import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HttpClientJsonpModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {Routing} from  "./app.routes";
import {CommonModule} from '@angular/common';
import {LazyLoadImageModule} from "ng-lazyload-image";
import {ElModule} from 'element-angular/release/element-angular.module';



//指令模块
import {MyColorDirective} from './pageDire/myDire/my-color.directive';
import {ColorEventDirective} from './pageDire/myDire/color-event.directive';
import {StructDirective} from './pageDire/myDire/struct.directive';
import {BorderDirective} from './pageDire/myDire/border.directive';
import { DireComponent } from './pageDire/direProperty/dire.component';
import { DireMixComponent } from './pageDire/direMix/dire-mix.component';
import {CustomDireComponent} from './pageDire/direCustom/custom-dire.component';


//依赖注入
import { CarComponent } from './pageDepence/car/car.component';
import { FruitserveComponent } from './pageDepence/fruitserve/fruitserve.component'

//Angular表单
import { TemplateformComponent } from './pageForm/templateform/templateform.component';
import { ResponseformComponent } from './pageForm/responseform/responseform.component'
import { ValidatorformComponent } from './pageForm/validatorform/validatorform.component';


//Rxjs与依赖注入
import { PushlistComponent } from './pageService/pushlist/pushlist.component';
import { HttprequestComponent } from './pageService/httprequest/httprequest.component';




import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImagesComponent } from './images/images.component';
import { TextsComponent } from './texts/texts.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './common/error/error.component';
import { FilterPipe } from './pipe/filter.pipe';
import { GetdatePipe } from './pipe/getdate.pipe';
import { LoginComponent } from './login/login.component';
import { RoutemainComponent } from './routemain/routemain.component';
import { ContentComponent } from './content/content.component';
import { TitleTextComponent } from './content/title-text/title-text.component';
import { LayuiComponent } from './layui/layui.component';
import { ChildComponent } from './child/child.component';









@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImagesComponent,
    TextsComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    FilterPipe,
    GetdatePipe,
    RoutemainComponent,
    ContentComponent,
    TitleTextComponent,
    LayuiComponent,
    ChildComponent,
    DireComponent,
    DireMixComponent,
    CustomDireComponent,
    MyColorDirective,
    ColorEventDirective,
    StructDirective,
    BorderDirective,
    CarComponent,
    FruitserveComponent,
    TemplateformComponent,
    ResponseformComponent,
    ValidatorformComponent,
    PushlistComponent,
    HttprequestComponent
   ],
  imports: [
    BrowserModule,
    CommonModule,
    LazyLoadImageModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ElModule.forRoot(),
    Routing
  ],
  providers: [HttpClientJsonpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
