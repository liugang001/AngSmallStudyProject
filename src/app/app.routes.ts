//创建路由配置文件
import { ImagesComponent } from './images/images.component';
import { TextsComponent } from './texts/texts.component';
import { HomeComponent } from './home/home.component';
import {ErrorComponent} from './common/error/error.component';
import {LoginComponent} from './login/login.component';
import {LayuiComponent} from './layui/layui.component';
import {RoutemainComponent} from './routemain/routemain.component';
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ContentComponent} from './content/content.component';

//指令
import {DireComponent} from './pageDire/direProperty/dire.component';
import {DireMixComponent} from './pageDire/direMix/dire-mix.component';
import {CustomDireComponent} from './pageDire/direCustom/custom-dire.component';

//依赖注入
import {CarComponent} from './pageDepence/car/car.component';
import {FruitserveComponent} from './pageDepence/fruitserve/fruitserve.component';

//表单模块
import {TemplateformComponent} from './pageForm/templateform/templateform.component';//模板式表单
import {ResponseformComponent} from './pageForm/responseform/responseform.component';//响应式表单
import {ValidatorformComponent} from './pageForm/validatorform/validatorform.component';//表单校验

//Rxjs与服务
import {PushlistComponent} from './pageService/pushlist/pushlist.component';
import {HttprequestComponent} from './pageService/httprequest/httprequest.component';
import {RxjsmodelComponent} from './pageService/rxjsmodel/rxjsmodel.component';
import {RatesModule} from './componentPage/rates/rates.module';
import {SendvalueModule} from './componentPage/sendvalue/sendvalue.module';
import {SmStructModule} from './componentPage/sm-struct/sm-struct.module';
import {PipeDemoModule} from './template/pipe-demo/pipe-demo.module';
import {ParamRouteModule} from './routes/param-route/param-route.module';
import {DefendRouteModule} from './routes/defend-route/defend-route.module';



const appRoutes:Routes=[
  {path:"login",component:LoginComponent},
  {path:"routemain",component:RoutemainComponent,children:[
      {path:"home",component:HomeComponent},
      {path:"image",component:ImagesComponent},
      {path:"text",component:TextsComponent},
      {path:"ngContent/:id/:ts",component:ContentComponent},
      {path:"layui",component:LayuiComponent},
      {path:"direProperty",component:DireComponent},//属性型指令
      {path:"direMix",component:DireMixComponent},//结构型指令
      {path:"direCus",component:CustomDireComponent},//自定义指令
      {path:"carInject",component:CarComponent},//汽车实例
      {path:"fruitServe",component:FruitserveComponent},//水果服务
      {path:"templateform",component:TemplateformComponent},//模板式表单
      {path:"responseform",component:ResponseformComponent},//响应式表单
      {path:"validatorform",component:ValidatorformComponent},//表单校验
      {path:"pushList",component:PushlistComponent},//共享服务列表
      {path:"requestWay",component:HttprequestComponent},//请求方式
      {path:"rxjsModel",component:RxjsmodelComponent},//Rxjs
      {path:"lazycomponent",loadChildren:"./componentPage/lazymodule/lazymodule.module#LazymoduleModule"},//Alert懒加载原理
      {path:"rates",loadChildren:"./componentPage/rates/rates.module#RatesModule"},//星星评分
      {path:"sendValue",loadChildren:"./componentPage/sendvalue/sendvalue.module#SendvalueModule"},//组件传值操作
      {path:"smStruct",loadChildren:"./componentPage/sm-struct/sm-struct.module#SmStructModule"},//组件简单的布局
      {path:"pipeDemo",loadChildren:"./template/pipe-demo/pipe-demo.module#PipeDemoModule"},//管道模板
      {path:"gotoRoute",loadChildren:"./routes/param-route/param-route.module#ParamRouteModule"},//路由参数
      {path:"defendRoute",loadChildren:"./routes/defend-route/defend-route.module#DefendRouteModule"}//路由守卫加载
   ]},
  {path:"",redirectTo:"/login",pathMatch:"full"},
  {path:"**",component:ErrorComponent}
];

export const Routing:ModuleWithProviders=RouterModule.forRoot(
  appRoutes,
  { useHash: true}
);

