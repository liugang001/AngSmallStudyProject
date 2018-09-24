import {Injectable} from '@angular/core';

/*
* 定义汽车引擎的类
* */
@Injectable()
export class Engine {
   private engineName:string="马自达引擎";
   public start():void{
     console.log(`${this.engineName}+'汽车开动了,呜呜呜.......'`);
   }
}
