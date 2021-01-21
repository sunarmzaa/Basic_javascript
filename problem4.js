// 4. use .map to create new number array แปลง array เป็น number

const strArr = ['1', '2', '3', '4', '5', '6', '7'];

const newArr = strArr.map((data, i) => {
    return Number(data);
})

console.log(newArr);
