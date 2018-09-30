import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup,Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-validatorform',
  templateUrl: './validatorform.component.html',
  styleUrls: ['./validatorform.component.css']
})
export class ValidatorformComponent implements OnInit {

  /*
  * 自定义表单 FormGroup
  * 用户表单模块
  * */
  private formModel:FormGroup;
  private subFormData:any;



  //提交表单 subForm
  public subForm(val:any){
    this.subFormData=val;
  }


  constructor(fb:FormBuilder) {
    //设置表单的初始化值
    this.formModel=new FormGroup({
      username:new FormControl(),//用户姓名
      age:new FormControl(),//用户名称
      email:new FormControl(),//用户邮箱
      passwordGroup:new FormGroup({
        password: new FormControl(),
        confirmPassword: new FormControl()
      }),
      listWordGroup:new FormArray([
          new FormControl("34455"),
          new FormControl("34455"),
        ]
      )
    })
  }

  ngOnInit() {}

}
