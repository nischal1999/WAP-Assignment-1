//Q1

function even(arr){
    return arr.filter(e=>e%2===0);
}
function odd(arr){
    return arr.filter(e=>e%2!==0);
}

const arr1=[1,2,3,4,5];
console.log(even(arr1));
console.log(odd(arr1));

//Q2

// Explain why do we want sometimes to use setImmediate instead of using setTimeout?

//Ans: SetImmediate is intended to take precedence over setTimeout in the event loop. 
// This means that the setImmediate callback will be executed first if you have both 
// the setTimeout and setSetImmediate callbacks scheduled to run at the same time. This 
// can be helpful in situations where you wish to guarantee that a specific action is 
// carried out with a greater priority in the event loop, such as when handling time-sensitive
//  events or updating the user interface.

// Explain the difference between process.nextTick and setImmediate?



