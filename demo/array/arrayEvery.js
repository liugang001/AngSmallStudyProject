
const fruits = [
  { name: 'apple', color: 'red' },
  { name: 'tomato', color: 'red' },
  { name: 'banana', color: 'red' },
  { name: 'grape', color: 'blue' }
];
//确保所有颜色都是红色
function isRed(Array) {
    var flag=true;
    for(let key of Array){
        if(!flag)break;//flag为假则跳出循环
        flag=(key.color=='red');
    };
     return flag
}

console.log(isRed(fruits));

//every 方法
function isTestRed(arr){
  //满足所有的水果是红色的
  return arr.every(item=>item.color=='red')
}
console.log(isTestRed(fruits));

//some 方法
function isSomeRed(arr){
  //满足至少有一个水果是红色的
  return arr.some(item=>item.color=='red')
}
console.log(isSomeRed(fruits));



let a=[34,55,66,55,67]
let b=[55,66,77,34,55]
let s=new Set(b);
let aResult=a.filter(item=>!s.has(item))
let bResult=a.filter(item=>s.has(item))
console.log(aResult)
console.log(bResult)

