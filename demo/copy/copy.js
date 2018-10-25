function deepClone(obj){
   var cloneObj=Array.isArray(obj)?[]:{};
   if(obj&&typeof obj === 'object'){
      for(var key in obj){
          if(obj.hasOwnProperty(key)){
              if(obj[key]&&typeof obj[key] ==="object"){
                cloneObj[key]=deepClone(obj[key]);
              }else{
                cloneObj[key]=obj[key];
              }
          }
      }
   }
   return cloneObj;
}
let a=[1,2,3,4];
let b=deepClone(a);
a[0]=8;
console.log(a,b);
