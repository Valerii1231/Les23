"use strict";

//  1
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*
let i = 0;
let sum = 0;
function sumArr(i) {
    sum = sum + arr[i];
    if (i == arr.length - 1) {
        return sum;
    } else {
        return sumArr(i = i + 1);
    }
}
console.log(sumArr(i)); 

*/

var i = 0;
var sum = 0;
i = 0;
sum = 0;

function sumArr(i) {
  sum = sum + arr[i];
  return i == arr.length - 1 ? sum : sumArr(i = i + 1);
}

console.log(sumArr(i));