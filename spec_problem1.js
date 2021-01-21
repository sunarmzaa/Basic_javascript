// เขียนฟังก์ชันรับพารามิเตอร์ 2 ตัว เพื่อจับคู่ Object inputA และ inputB 
// โอยอ้างอิงจาก id จากนั้นให้ return ออกมาให้หน้าตาเหมือน output

//output
// const output = [
//   { id: 1, name: 'customer1', sur_name: 'sur1', province: 'SR' },
//   { id: 2, name: 'customer2', sur_name: 'sur2', province: 'SP' },
//   { id: 3, name: 'customer3', sur_name: 'sur3', province: 'SA' },
// ]

//input

const inputA = [
    { id: 1, name: 'customer1', sur_name: 'sur1' },
    { id: 2, name: 'customer2', sur_name: 'sur2' },
    { id: 3, name: 'customer3', sur_name: 'sur3' },
]
const inputB = [
    { id: 1, province: 'SR' },
    { id: 2, province: 'SP' },
    { id: 3, province: 'SA' },
]

const output = inputA.map((data) => {
    //data.province = '';
    //return data;

    const found = inputB.find((b) => {
        return data.id === b.id;

    })
    return { ...data, province: found.province };
})
console.log(output);