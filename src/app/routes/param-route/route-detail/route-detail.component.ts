import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.component.html',
  styleUrls: ['./route-detail.component.css']
})
export class RouteDetailComponent implements OnInit {

  private idParam:string;
  private newParam:string='344';
  constructor(private router:Router,private routerInfo:ActivatedRoute) {

  }

  //变化当前路由中的参数值
  public varyParams(){
      this.router.navigate(['./routemain/gotoRoute/tableDetail',this.newParam])
  }

  ngOnInit() {
      //参数快照
      this.idParam=this.routerInfo.snapshot.params['id'];
      //参数订阅
      this.routerInfo.params.subscribe(data=>{
          this.idParam=data['id'];
      })
  }

}
