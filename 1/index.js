/*
var x = 10;
let y = 20;
const z = 30;

console.log(x)
console.log(y)
console.log(z)
*/

/*
const arr = [1, 2, 3, 4, 5];
let n1 = arr[0]
let n2 = arr[1]
let rest = [arr[2], arr[3], arr[4]];
console.log(n1, n2, rest);
*/


const arr = [1, 2, 3, 4, 5];
let [n1, n2, ...rest] = arr;
console.log(n1, n2, rest);