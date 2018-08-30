import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() modelValue:string;
  @Input() newModel:string;
  @Output() addEvent:EventEmitter<any>=new EventEmitter();
  public page:string="2334";
  public name:string="十全十美";


  constructor() {
  }
  ngOnInit() {
    this.addEvent.emit(this.page)
  }

}
