/*
    设计模式：[套路]
    重用代码，让代码更容易被理解，保证代码的可靠性

 */

function Monkey(){
    console.log('很久很久前，海边有一块石头,吸收日月的精华....');
}

Monkey.prototype={
    sayName:function () {
        console.log('我是泼猴')
    },
    attack:function(){
        console.log('猴拳')
    },
    defend:function(){
        console.log('我跳，我跳，我跳')
    }
}


//定义装饰器
var Decoration=function(monkey){
    //定义装饰器
    //装饰后的内容和被装饰的内容完全分离
    this.monkey=monkey;
}
//装饰者要实现被装饰的方法--
Decoration.prototype={
    sayName:function(){
        this.monkey.sayName();
    },
    attack:function(){
        this.monkey.attack();
    },
    defend:function(){
        this.monkey.defend();
    }
}



//装饰者猴子功能增加
var DecorationMoney=function(monkey){
    Decoration.call(this,monkey);
    console.log('我是一只猴子');
}
DecorationMoney.prototype=new Decoration();
DecorationMoney.prototype.sayName=function(){
    console.log('我是有金箍棒的孙悟空')
}
DecorationMoney.prototype.defend=function(){
    console.log('我是有分身术的孙悟空');
    this.monkey.attack();
}


var monkey=new Monkey();
console.log("装饰前----------------------------------");
monkey.sayName();
monkey.attack();
monkey.defend();

console.log("装饰后----------------------------------");
var monkeyEye=new DecorationMoney(monkey);
monkeyEye.sayName();
monkeyEye.defend();












