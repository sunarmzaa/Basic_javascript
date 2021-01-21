//5. use filter to create a new array that does not contain null value

const arr = [1, 3, 4, 5, null, 2, null, -4, null]
const newArr = arr.filter((data, i) => {
    return data != null;
})
console.log(newArr);
