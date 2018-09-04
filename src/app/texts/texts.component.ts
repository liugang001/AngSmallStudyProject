import { Component, OnInit,ViewChild} from '@angular/core';
import {ChildComponent} from '../child/child.component';

@Component({
  selector: 'app-texts',
  templateUrl: './texts.component.html',
  styleUrls: ['./texts.component.css']
})
export class TextsComponent implements OnInit {

  @ViewChild(ChildComponent) order:ChildComponent;

  title:string="this is A Book";
  color:string="green";
  dateDay:string;
  sendEvent(event){
    console.log(event);
  }

  constructor() {}

  ngOnInit() {}

}
