import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import {FruitService} from '../service/fruit.service';
import {LogtextService} from '../service/logtext.service';

@Component({
  selector: 'app-fruitserve',
  templateUrl: './fruitserve.component.html',
  styleUrls: ['./fruitserve.component.css'],
  providers:[FruitService,LogtextService]//服务停供器
})

@Injectable()
export class FruitserveComponent implements OnInit {

  private FruitList:Array<any>;
  private textPara:string;
  //依赖注入
  constructor(
    private fruitService:FruitService
  ) {
      //获取水果列表
      this.FruitList=this.fruitService.getFruitList();
      //获取文本信息
      this.textPara=this.fruitService.getOtherText("我是服务中注入服务的文本");
  }

  ngOnInit() {}

}
