// 6. use reduce to find the minimum value in an array  prev = คำตอบก่อนหน้า prev = คำตอบปัจจุบัน

const arr = [-1, -6, 10, 20, -3, 4];
const min = arr.reduce((prev , data) => {
    if(prev < data)
        return prev;
    else
        return data;
});
console.log(min);