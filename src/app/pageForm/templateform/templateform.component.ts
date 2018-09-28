import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  /*
  * 注意：模板式表单的控制文件（.ts）中不会使用任何表单相关的API。
  * */

  public onSubmit(value:any){
      console.log(value);
  }


  constructor(){}
  ngOnInit() {}

}
