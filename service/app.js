const express=require("express");
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));


//接口访问---
app.post("/arealist",function(req,res){
    console.log(req.body.timeStart);
    console.log(req.body.timeEnd);
    res.json({
        "list":[
          {"name":"gang","age":22,"address":"四川省"},
          {"name":"reng","age":26,"address":"江苏省"},
          {"name":"zhang","age":23,"address":"安徽省"},
          {"name":"qing","age":22,"address":"广东省"},
          {"name":"zheng","age":27,"address":"河北省"},
          {"name":"heng","age":24,"address":"山西省"}
        ]
    })
})

app.listen(8080);
