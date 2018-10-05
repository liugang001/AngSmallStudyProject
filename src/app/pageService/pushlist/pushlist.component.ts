import { Component, OnInit } from '@angular/core';
import {AddlistService} from '../service/addlist.service';

@Component({
  selector: 'app-pushlist',
  templateUrl: './pushlist.component.html',
  styleUrls: ['./pushlist.component.css'],
  providers:[AddlistService]
})
export class PushlistComponent implements OnInit {

  list:Array<number>=[];
  //依赖注入数组操作服务器
  constructor(private addListArray:AddlistService) {
    this.list=this.addListArray.list;
  }

  //添加元素
  public addElement(){
      let num=parseInt((Math.random()*100).toString());
      this.addListArray.addElement(num);
  }

  //移除元素
  public removeElement(){
    this.addListArray.removeElement();
  }




  ngOnInit() {}

}
