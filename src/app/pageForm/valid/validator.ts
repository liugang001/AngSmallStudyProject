import {FormGroup,FormControl,ValidatorFn,AbstractControl} from '@angular/forms';
//校验手机号码
export function mobileValidator():ValidatorFn {
    return (control:AbstractControl):{[key:string]:any}=>{
          let myreq = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
          let valid = myreq.test(control.value);
          //console.log("手机校验的结果为:"+valid);
          //验证规则，验证通过的时候返回null，验证不过的时候返回信息。
          return valid?null:{mobile:true}
    }
}


// 多控件一起校验
export function equalValidator(group: FormGroup): any {
  let password: FormControl = group.get('password') as FormControl;
  let cpassword: FormControl = group.get('confirmPassword') as FormControl;
  let valid: boolean = (password.value === cpassword.value );
  //console.log('密码校验结果为: ' + valid);
  return valid ? null : {equal: {pdesc: '密码和确认密码不匹配'}};
}
