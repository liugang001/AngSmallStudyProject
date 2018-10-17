import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.component.html',
  styleUrls: ['./route-detail.component.css']
})
export class RouteDetailComponent implements OnInit {

  private idParam:string;
  private newParam:string;
  constructor(private routes:Router,private routerInfo:ActivatedRoute) {

  }

  ngOnInit() {
      this.idParam=this.routerInfo.snapshot.params['id'];
      this.newParam=this.routerInfo.snapshot.queryParams['id'];
      console.log(this.newParam)
  }

}
