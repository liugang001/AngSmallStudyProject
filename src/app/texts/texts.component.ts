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
  myNumber:number=23.3499494;
  data:any={
      name:"gang",
      age:23,
      address:"四川省遂宁市射洪县"
  };
  sendEvent(event){
    console.log(event);
  }

  constructor() {}

  ngOnInit() {}

}
