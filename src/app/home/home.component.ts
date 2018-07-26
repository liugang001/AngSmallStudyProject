import { Component, OnInit } from '@angular/core';
import {LoggingService} from '../service/logging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[LoggingService]
})
export class HomeComponent implements OnInit {

  term:string="";
  arrList:any=[];

  trees:any[]=[
    {name:"wang",age:"23",color:['red','yellow','yellow']},
    {name:"wang",age:"23",color:['red','blue','yellow']},
    {name:"wang",age:"23",color:['red','pink','yellow']},
    {name:"wang",age:"23",color:['red','green','yellow']},
  ]



  constructor(private LoginMethod:LoggingService) {}

  startLog(){
    this.LoginMethod.log();
  }

  ngOnInit() {
     this.LoginMethod.getJsonData().subscribe(data=>{
         this.arrList=data;
     });
  }

}
