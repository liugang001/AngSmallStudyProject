import { Component, OnInit,ViewEncapsulation} from '@angular/core';
/*
* ViewEncapsulation 扩展样式模块
* encapsulation:ViewEncapsulation.None
* */
@Component({
  selector: 'app-lazymodule',
  templateUrl: './lazymodule.component.html',
  styleUrls: ['./lazymodule.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class LazymoduleComponent implements OnInit {
  constructor() {}
  ngOnInit(){}
}
