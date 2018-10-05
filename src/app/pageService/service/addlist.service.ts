import { Injectable } from '@angular/core';

@Injectable()
export class AddlistService {

  //定义一个列表
  public list:Array<number>=[34,55];
  //添加元素的方法
  public addElement(str:number):Array<number>{
      this.list.push(str);
      return this.list;
  }
  //移除数组元素的方法
  public removeElement():Array<number>{
      this.list.pop();
      return this.list;
  }
  constructor() {}
}
