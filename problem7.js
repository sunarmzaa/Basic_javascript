//7. use findIndex to check wheter the array contains even number

const arr = [1, 3, 5, 7, 8, 9, 21];
const even = arr.findIndex((num, i) => {
        return num %2 === 0;
})
console.log(even >= 0);