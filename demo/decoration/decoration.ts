function plantName(target,key,description){
    console.log(target);
    console.log(key);
    console.log(description);
    description.value=()=>{//改写toString()的方法,方法覆盖
        console.log("我是一株绿色的植物");
    }
    console.log("running");
    return description;
}

//定义植物的类
class Plant{
    @plantName
    toString(){
        console.log("Hello World");
    }
}

let plant =new Plant();
plant.toString();