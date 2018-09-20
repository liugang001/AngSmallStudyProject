import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dire-mix',
  templateUrl: './dire-mix.component.html',
  styleUrls: ['./dire-mix.component.css']
})
export class DireMixComponent implements OnInit {

  /*
    NgIf
    如果判断值为false，则直接移除该DOM元素
  * */
  showText:boolean=false;
  constructor() { }
  ngOnInit() {}

}
