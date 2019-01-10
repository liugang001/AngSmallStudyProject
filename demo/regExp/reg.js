var reg=/^(?![0-9]+$)(?![a-zA-Z]+$)(?![@!$%^]+$)[0-9A-Za-z!@$%^]{8,16}$/;
var str="abdccccc";
if(reg.test(str)){
  console.log("passing");
}else{
   console.log("密码由数字+字母，数字+特殊符号，字母+特殊符号 或者数字+字母+特殊符号组成，" +
     "不能是纯数字，纯字母，纯特殊符号，且特殊符号包括 ! @ $ % ^ 这几类");
}
