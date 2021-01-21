// use .sort to order string in an array asc น้อยไปมาก

const arr = ['z', 'c', 'd','g']
arr.sort((a , b) => {
    return a.localeCompare(b);
})
console.log(arr);