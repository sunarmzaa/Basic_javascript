// 8. use sort to order number in an array asc น้อยไปมาก dsc มากไปน้อย
/*
const arr = [1,2,-3,-4,-5,6]
const num = arr.sort((a, b) => {
    return a-b;
})
console.log(num);
*/

const arr = [1,2,-3,-4,-5,6]
arr.sort((a, b) => {
    return a-b;
})
console.log(arr);