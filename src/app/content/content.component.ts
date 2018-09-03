import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  title:string='meng guang yuan hang....';
  acceptParam:string;
  acceptTs:string;
  constructor(
    private router:ActivatedRoute
  ) {}
  ngOnInit(){
    //参数快照
    this.acceptParam=this.router.snapshot.params['id'];
    this.acceptTs=this.router.snapshot.params['ts'];
    //参数订阅
    this.router.data.subscribe(data=>{
       console.log(data);
    })

  }
}
