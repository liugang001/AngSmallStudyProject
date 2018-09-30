import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, FormArray,Validators} from '@angular/forms';

@Component({
  selector: 'app-responseform',
  templateUrl: './responseform.component.html',
  styleUrls: ['./responseform.component.css']
})
export class ResponseformComponent implements OnInit {



  //用户名称选择
  userNameForm:FormControl=new FormControl('LIUGANG');
  userAgeForm:FormControl=new FormControl('84');




  //日历的选择
  myFormModel:FormGroup=new FormGroup({
    from:new FormControl("start date"),
    to:new FormControl("end date")
  })




  //处理可变的元素 数组
  private myEmail:FormArray=new FormArray([
    new FormControl("gang@qq.com"),
    new FormControl("wang@qq.com"),
    new FormControl("pang@qq.com"),
  ])



  /*
  * 自定义表单 FormGroup
  * 用户表单模块
  * */
  private formModel:FormGroup;
  private subFormData:any;



  /*
  * 提交表单
  * subForm
  * */
  public subForm(val:any){
     this.subFormData=val;
  }


  constructor(fb:FormBuilder){
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
  ngOnInit() {
    console.log(this.userNameForm);
    console.log(this.myFormModel);
    console.log(this.myEmail);
  }

}
