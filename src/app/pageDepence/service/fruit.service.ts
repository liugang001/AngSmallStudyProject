import { Injectable } from '@angular/core';
import {LogtextService} from './logtext.service';


@Injectable()
export class FruitService {

  //定义水果的列表字段----
  private fruit:Array<{name:string,color:string}>=[
    {name:"apple",color:"red"},
    {name:"pear",color:"cyan"},
    {name:"grape",color:"purple"},
    {name:"banana",color:"black"},
    {name:"orange",color:"orange"},
  ]

  //获取水果数组-----
  public getFruitList(){
      return this.fruit;
  }
  //获取一段文字
  public getOtherText(name){
      return this.LogtextService.log(name);
  }
  constructor(private LogtextService:LogtextService){}
}
