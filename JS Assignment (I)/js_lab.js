"use strict";

// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-thenelse construct available in Javascript.

function max(x,y){
    if (x>=y) {
        return x;
    }else{
        return y;
    }
}

//Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

function maxOfThree(x,y,z){
    if(x>=y && x>=z){
        return x;
    }else if(y>=x && y>=z){
        return y;    
    }else{
        return z;
    }
}

// Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel(char){
    let vowels=['a','b','c','d','e'];
    return  vowels.includes(char.toLowerCase());
}

// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an
// input array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// Note/Hint: Do these using Imperative programming approach (i.e. for…loop or while…loop)

function sum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
function multiply(arr){
    let multiple=1;
    for (let i=0;i<arr.length;i++){
        multiple*=arr[i];
    }
    return multiple;
}

// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should
// return the string "ratset gaj"

function reverse(str){
    return str.split('').reverse().join('');
}

//Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

function longestWord(arr){
    let longest=arr[0];
    for (let i=1;i<arr.length;i++){
        if (arr[i].length>longest.length) longest=arr[i];
    }
    return longest;
}

//Write a function filterLongWords() that takes an array of words and an integer i and returns a new array
// containing only those words that were longer than i characters.

function filterLongWords(array, i){
    return array.filter(e=>e.length>i);
}

// Write a function named, computeSumOfSquares, that takes as input, an array of numbers and calculates and
// returns the sum of the squares of each number in the input array. E.g. computeSumOfSquares([1,2,3]) should be
// computed as 1^2 + 2^2 +3^2 = 14. Note: Write your Javascript code without using Imperative programming. i.e. Do
// NOT use any explicit looping construct; instead use functional programming style/approach.

function computeSumOfSquares(arr){
    return arr.reduce((sum,num)=>sum+num*num,0);
}

// Write a function named, printOddNumbersOnly, that takes as input, an array of integral numbers and it finds
// and prints only the numbers which are odd.

function printOddNumbersOnly(arr){
    arr.filter(e=>e%2!=0).forEach(e =>console.log(e));
}

// Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of integral numbers
// and calculates and returns the sum of the squares of only the even numbers in the input array. E.g.
// computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 2^2 +4^2 = 20.

function computeSumOfSquaresOfEvensOnly(arr){
    return arr.filter(e=>e%2==0).reduce((a,c)=>a+c*c,0);
}

// Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) (defined in Problem 4
// above) without using Imperative programming. i.e. Do NOT use any explicit looping construct; instead use
// functional programming style/approach. 

function sumUsingFunctional(arr){
    return arr.reduce((a,c)=>a+c,0);
}
function multiplyUsingFunctional(arr){
    return arr.reduce((a,c)=>a*c,1);
}

// Implement Javascript code for a function named, findSecondBiggest, which takes as input, an array of numbers
// and finds and returns the second biggest of the numbers. For example, findSecondBiggest([1,2,3,4,5]) should
// return 4. And findSecondBiggest([19,9,11,0,12]) should return 12. (Note: Do not use sorting!)

function findSecondBiggest(arr){
    let biggest=-Infinity;
    let secondBiggest=-Infinity;
    for (let i=0;i<arr.length;i++){
        if (arr[i]>biggest){
            secondBiggest=biggest;
            biggest=arr[i];
        }else if(arr[i]>secondBiggest){
            secondBiggest=arr[i];
        }
    }
    return secondBiggest;
}

// Write a function named printFibo, that takes as input, a given length, n, and any two starting numbers a and b,
// and it prints-out the Fibonacci sequence, e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, beginning with
// a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output; printFibo(n=2, a=0, b=1), prints-out: "0, 1", as 
// output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2,
// 3, 5", as output; and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).

 function printFibo(n,a,b){
    let print="";
    if(n<=0) return;
    if(n>=1) print=print+a+", ";
    if(n>=2) print=print+b+", ";

    for (let i=3;i<=n;i++){
        let c=a+b;
        a=b;
        b=c;
        if(i==n){
            print=print+c+"";
        }else{
            print=print+c+", ";
        }  
    }
    console.log(print);
}

// 14. Use Array Methods: filter, map, reduce, etc to implement functions below:
// 1. Create a function using function declaration named sum with one parameter of Array type, the returned
// result is the sum of all elements which are greater than 20.
// 2. Create a function using function expression named getNewArray with one parameter of String Array,
// return a new array which contains all string, length is greater than and equal to 5, and contains letter ‘a’.

//1st part
function sumGreaterThan20(arr){
    return arr.filter(e=>e>20).reduce((a,c)=>a+c,0);
}

//2nd part

function getNewArray(arr){
    return arr.filter(e=>e.length>=5 && e.includes("a"));
}

//Test conditions written to test the functions
console.log(sumGreaterThan20([1,21,5,22]));
console.log(getNewArray(["apple","ball","eagle","ffffffff"]));
printFibo(10,0,1);
console.log(findSecondBiggest([1,2,3,4,5,6,7]));
console.log(sumUsingFunctional([1,2,3,4]));
console.log(multiplyUsingFunctional([1,2,3,4]));
console.log(computeSumOfSquaresOfEvensOnly([1,2,3,4,5]));
printOddNumbersOnly([1,3,2,4,1,5,6,7]);
console.log(computeSumOfSquares([1,2,3,1]));
console.log(filterLongWords(['app','ball','cat','eagle','abc'],3));
console.log(longestWord(['app','ball','cat','eagle','abc']));
console.log(reverse("apple"));
const arr=[1,2,3,4,5];
console.log(sum(arr));
console.log(multiply(arr));
console.log(isVowel('a'));
console.log(isVowel('t'));
console.log(maxOfThree(2,1,3));
console.log(max(2,4));