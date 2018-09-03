import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  title:string='APP TItLES';
  acceptParam:string;
  constructor(
    private router:ActivatedRoute
  ) {}
  ngOnInit(){
    this.acceptParam=this.router.snapshot.params['id'];
  }
}
