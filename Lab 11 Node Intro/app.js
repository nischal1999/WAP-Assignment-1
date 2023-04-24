//Q1

Array.prototype.even=function(){
    return this.filter(e=>e%2===0);
}
Array.prototype.odd=function(){
    return this.filter(e=>e%2!==0);
}
const arr1=[1,2,3,4,5];
console.log(arr1.even());
console.log(arr1.odd());




