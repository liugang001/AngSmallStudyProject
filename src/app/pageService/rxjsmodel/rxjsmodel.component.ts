import {Component, OnInit} from '@angular/core';
import {fromEvent, ObservableInput} from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/internal/operators';

@Component({
  selector: 'app-rxjsmodel',
  templateUrl: './rxjsmodel.component.html',
  styleUrls: ['./rxjsmodel.component.css']
})
export class RxjsmodelComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
    const oBtnListOne: Element = document.querySelector('#btn-list-one');
    const oBtnListTwo: Element = document.querySelector('#btn-list-two');
    const oText: Element = document.getElementById('text');
    //原生事件点击
    oBtnListOne.addEventListener('click', () => {
      oText.innerHTML = 'Hello World OriginEvent';
    });
    //Observable响应事件 订阅模式
    fromEvent(oBtnListTwo, 'click').subscribe(() => {
      oText.innerHTML = 'I am Observable';
    });

  }


}
