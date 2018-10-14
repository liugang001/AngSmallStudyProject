import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-httprequest',
  templateUrl: './httprequest.component.html',
  styleUrls: ['./httprequest.component.css'],
  providers:[]
})
export class HttprequestComponent implements OnInit {

  private priviceList:any=[];
  private postList:any=[];


  constructor(private http:HttpClient) {
      //get请求
      this.http.get('./assets/fake/data.json').subscribe(data=>{
         this.priviceList=data;
      },err=>{
        console.log(`请求发生错误，错误码:${err.status}`);
      })



  }

  //post请求------
  public acceptPost(){
    this.http.post('/arealist',JSON.stringify({
        timeStart:"2018-10-05 00:00:00",
        timeEnd:"2018-10-30 23:59:59"
      }),
      {headers:{'Content-Type':'application/json'}
      }).subscribe(data=>{
         this.postList=data['list'];
         console.log(this.postList)
      },err=>{
        console.log(`请求发生错误，错误码:${err.status}`);
      })
  }

  ngOnInit() {}

}
