import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-routemain',
  templateUrl: './routemain.component.html',
  styleUrls: ['./routemain.component.css']
})
export class RoutemainComponent implements OnInit {

  public routeList:any=[];
  constructor(
    private http:HttpClient
  ) {}

  LoadFromList(){
      this.http.get("../../assets/fake/route.json").subscribe(res=>{
         this.routeList=res;
      })
  }


  ngOnInit() {
    this.LoadFromList();
  }




}
