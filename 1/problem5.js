// use .filter to create a new array that does not contain null value

const arr = [1, 3, 4, 5, null, 2, null, -4, null]

const result = arr.filter((item) => item !== null)
console.log(result);