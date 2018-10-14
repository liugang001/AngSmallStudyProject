/*
* 定义一株植物
* 1.装饰者要实现被装饰着的功能
* 2.装饰后的内容和被装饰的内容完全独立分离
* */
function Plant(){
    this.name='小小绿萝';
    console.log('在我的电脑面前,长了一株一株绿萝')
}
//实现植物的功能
Plant.prototype.color=function(){
    console.log(this.name+'植物的颜色是绿色')
}
Plant.prototype.see=function(){
    console.log(this.name+"可以用来观赏")
}
Plant.prototype.defend=function(){
    console.log(this.name+"可以抵抗电脑辐射");
}



//定义装饰器----
function Decoration(plant){
    this.plant=plant;
}
Decoration.prototype.color=function(){
    this.plant.color();
}
Decoration.prototype.see=function(){
    this.plant.see();
}
Decoration.prototype.defend=function(){
    this.plant.defend();
}

//实现装饰者----
var DecorationGreenPlant=function(plant){
    //类似继承
    Decoration.call(this,plant);
}
DecorationGreenPlant.prototype=new Decoration();
DecorationGreenPlant.prototype.color=function(){
    console.log(this.plant.name+"有着蓊蓊郁郁的绿色");
}
DecorationGreenPlant.prototype.see=function(){
    console.log(this.plant.name+"可以为广大人名群众提供观赏");
}
DecorationGreenPlant.prototype.defend=function(){
    console.log(this.plant.name+"可以为防御可怕的电脑辐射");
}
DecorationGreenPlant.prototype.smell=function(){
    console.log(this.plant.name+"闻起来有一股绿意");
    //this.plant.defend();
}


var plant=new Plant();
console.log("装饰前--------------------------")
plant.color();
plant.see();
plant.defend();

console.log("装饰后-------------------------------");
var plantGreenPlant=new DecorationGreenPlant(plant);
plantGreenPlant.color();
plantGreenPlant.see();
plantGreenPlant.defend();
plantGreenPlant.smell();