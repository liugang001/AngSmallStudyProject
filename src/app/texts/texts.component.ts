import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-texts',
  templateUrl: './texts.component.html',
  styleUrls: ['./texts.component.css']
})
export class TextsComponent implements OnInit {

  title="this is A Book";
  color="green";
  constructor() {

  }

  ngOnInit() {
  }

}
