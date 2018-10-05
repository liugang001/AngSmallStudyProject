import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup,Validators,FormBuilder} from '@angular/forms';
import {mobileValidator,equalValidator} from '../valid/validator';

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
    if(this.formModel.valid){
        this.subFormData=val;
        console.log(this.formModel.value)
    }else{
        this.subFormData='还有验证未通过';
    }
  }


  constructor(fb:FormBuilder) {
    //设置表单的初始化值
    this.formModel=fb.group({
      username:['',[Validators.required,Validators.maxLength(3)]],//用户姓名
      age:['',[Validators.required,Validators.pattern('^[1-9]{1,2}$')]],//用户年龄
      phone:['',[Validators.required,mobileValidator()]],//用户手机
      passwordsGroup:fb.group({
        password:['',Validators.minLength(6)],
        confirmPassword:['',Validators.minLength(6)]
      },{validator:equalValidator})
    })
  }

  ngOnInit() {}

}
