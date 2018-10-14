/*
*运用原型链  手动编造装饰者
* */
function Monkey(){}
function getSayName(target,key,decription){
    decription.value=function(){
        console.log('我是一只猴子');
    }
    return decription;
}

var des={
    value:function(){},
    enumerable:true,
    configurable:true,
    writable:true
}
console.log('prev:'+des.value.toString())
var desMode=getSayName(Monkey.prototype,"toString",des);
console.log('next:'+desMode.value.toString());
//原型链方法添加
Object.defineProperty(Monkey.prototype,'toString',des);


var monkey=new Monkey();
monkey.toString();

