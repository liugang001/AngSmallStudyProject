import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-main',
  templateUrl: './route-main.component.html',
  styleUrls: ['./route-main.component.css'],
})
export class RouteMainComponent implements OnInit {

  constructor() { }
  ngOnInit() {
      console.log(this.fun<string>('我是泛型'))
  }
  public  fun<T>(args:T):T{
    return args;
  }


}
