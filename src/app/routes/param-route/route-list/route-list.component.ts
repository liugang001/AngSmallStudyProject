import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css']
})
export class RouteListComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {}

  public checkDetail(){
      this.route.navigate(["./routemain/gotoRoute/tableDetail",345566])
  }

}
