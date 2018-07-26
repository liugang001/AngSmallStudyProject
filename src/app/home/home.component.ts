import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  term:string="";
  arrList:any[]=[
    {name:"gang",age:22,address:"四川省"},
    {name:"reng",age:26,address:"江苏省"},
    {name:"zhang",age:23,address:"安徽省"},
    {name:"qing",age:22,address:"广东省"},
    {name:"zheng",age:27,address:"河北省"},
    {name:"heng",age:24,address:"山西省"}
  ];

  trees:any[]=[
    {name:"wang",age:"23",color:['red','yellow','yellow']},
    {name:"wang",age:"23",color:['red','blue','yellow']},
    {name:"wang",age:"23",color:['red','pink','yellow']},
    {name:"wang",age:"23",color:['red','green','yellow']},
  ]



  constructor() { }

  ngOnInit() {
  }

}
