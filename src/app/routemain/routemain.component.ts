import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-routemain',
  templateUrl: './routemain.component.html',
  styleUrls: ['./routemain.component.css']
})
export class RoutemainComponent implements OnInit {

  public hashIndex:any;

  constructor(private routerInfo:ActivatedRoute) {}



  ngOnInit() {
    this.hashIndex=this.routerInfo.snapshot.queryParams['id'];
  }

}
