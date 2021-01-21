//console.log("Hello world")

/*
{
    var x = 10;
    let y = 20;
    const z = 30;
}

console.log(x)
console.log(y)
console.log(z)
*/
/*
console.log(5%2)
console.log(5**2)
*/

/* 1. random a number ranged from 10 to 70 (only integer)
console.log(Math.floor (Math.random() * 60) + 10);
*/
/*
const str = 'Hello';
const str2 = "World";
const str3 = `Hahaha`;

//console.log(str2 + "\n" + str3)
console.log(`${str2}\n${str3}`)
*/

/* 2. check if a string conains a search text

const search = 'e';
const message = 'Hello JavaScript';
console.log(message.indexOf(search) >= 0)
*/

/*การแปลง string ->  number 
const x = '1'
console.log(typeof x)
console.log(typeof parseInt(x))
console.log(typeof +x)
console.log(typeof Number(x))
*/

/*
for (let i = 0; i < 20; i++) {
    console.log(i);
 }
 */

/*
const arr = [1, 2, 3, 4, 5];
arr[0] = 10;
console.log(arr[0]); // 1
console.log(arr)
*/

/*
const arr = [1, 2, 3, 4, 5];
const arr = [-1, -2, 3, -4, 5]*/
/*const i0 = arr[0];
const i1 = arr[1];
const i2 = arr[2];
console.log(i0,i1,i2);*/
/*
const [i0,i1,i2] = arr;
console.log(i0,i1,i2,rest);*/
/*
const [i0,i1,i2, ...rest] = arr;
console.log(i0,i1,i2,rest);*/

//const arr2 = [...arr];
//const arr2 = [...arr, 6 , 7 , 8];
/*
const arr3 = [...arr, arr2];
arr2[0] = 20;
console.log(arr , arr2);
*/



/*
// 3. merge two arrays into a new array
const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];
const arr3 = [...arr1, ...arr2];
console.log("arr = ",arr3);
*/

// push เพิ่มค่าต่อท้ายในอาเรย์
/*const arr = [1, 2, 3, 4];
arr.push(5);
arr.push(6);
arr.push(7);
console.log(arr);*/
//หรือ
/*const arr = [1, 2, 3, 4, 5];
arr[arr.lengh] = 6
arr[arr.lengh] = 6
arr[arr.lengh] = 6
arr[arr.lengh] = 6

console.log(arr);*/
//หรือ
/*let arr = [1, 2, 3, 4];
arr = [...arr,6]
arr = [...arr,6]
arr = [...arr,6]
console.log(arr);
*/

/*การหาค่า
let arr = [1, 2, 3, 4];
console.log(arr.includes(6));
arr = [...arr,6]
console.log(arr.includes(6));
*/

/*
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i< arr.length; i++){
    console.log(arr[i]);
}
*/



//let arr = [1, 2, 3, 4, 5];

/*arr.forEach((item, index) => {
    console.log(index + ":" + item)
})
*/

/*
const newArr = arr.map((data, i) => {
    //return i;
    //return data + 2;
    return data * data;
});
console.log(newArr);
*/

//const newArr = arr.filter((elem, id) => {
//return true;
//return false;
//return elem % 2 === 0;
//return elem > 2;
/*-----
    const num = arr.reduce((prev, data, i) => {
            return prev + data;

    }, 0 )
console.log(num);
----*/


/*const found = arr.find((data, i) => {
    return data % 2 === 0;
});
*/
//console.log(founnd);

//source


/*
let arr = ['a', 'p', 'm', 'b', 's'];
arr.sort((a, b) => {
    return a.localeCompare(b);
})
console.log(arr);
*/



/* 4. use .map to create new number array แปลง array เป็น number

const strArr = ['1', '2', '3', '4', '5', '6', '7'];

const newArr = strArr.map((data, i) => {
    return Number(data);
})

console.log(newArr);
*/

/*5. use filter to create a new array that does not contain null value

const arr = [1, 3, 4, 5, null, 2, null, -4, null]
const newArr = arr.filter((data, i) => {
    return data != null;
})
console.log(newArr);
*/


/* 6. use reduce to find the minimum value in an array  prev = คำตอบก่อนหน้า prev = คำตอบปัจจุบัน

const arr = [-1, -6, 10, 20, -3, 4];
const min = arr.reduce((prev , data) => {
    if(prev < data)
        return prev;
    else
        return data;
});
console.log(min);
*/
/* หรือ 6. use reduce to find the minimum value in an array  prev = คำตอบก่อนหน้า prev = คำตอบปัจจุบัน
const arr = [-1, -6, 10, 20, -3, 4];
const min = arr.reduce((prev , data) => {
        return prev < data ? prev : data;
});
console.log(min);*/

/*7. use .findIndex to check wheter the array contains even number
const arr = [1, 3, 5, 7, 8, 9, 21];
const even = arr.findIndex((num, i) => {
        return num %2 === 0;
})
console.log(even >= 0);
*/

/*
const cat = { name: "Tom", color: "white" }
console.log(cat);
*/

/*
const cat = { name: "Tom", color: "white" }
const key = 'color'
console.log(cat.name);
console.log(cat.color);
console.log(cat['color']);
console.log(cat[key]);
*/

/*
const cat = { name: "Tom", color: "white" }
cat.name = "Tom1"
cat['name'] = "Tom2"
console.log(cat);
*/

/*
const cat = { name: "Tom", color: "white" , age: 1 , weight: 5}
    //const name = cat.name;
    //const color = cat.color;
    const{ color , name , ...rest } = cat;
console.log(color , name , rest);
*/

/*
const cat = { name: "Tom", color: "white" , age: 1 , weight: 5}
    const cat2 = {long: 10 , name : "Test"};
    const cat3 = {...cat2, ...cat};
    cat2.name = ""
    console.log(cat ,cat2);
*/

/*-----
//สร้าง object เก็บข้อมูลของตัวเอง  ชื่อจริง นามสกุล อายุ 
    const person = { fistname: "Pheeraphon" , lastname: "Kunmuang", age: 21 }
  
//สร้าง object ข้อมูลแมว 1 ตัว มี ชื่อ สี อายุ 
    const cat = { name: "Tom", color: "Black white" , age: 1 }
    
//สร้าง ข้อมูล ที่อยู่่ จังหวัด อำเภอ ตำบล
    const address1 = { province: "Suratthani", district :"Bannadoem", subDistrict: "Banna" }

//สร้างข้อมูลที่อยู่ บ้านเลขที่ เบอร์โทร
const address2 = {no: 84 , tel : 0922293495 }

person.cat = cat;
person.address = {...address1, ...address2}
console.log(person);
----*/

/*
const students = [
    {
        id: '024', 
        name : 'Pheeraphon Kunmuang'
    },
    {
        id: '045', 
        name : 'jon Hands'
    },
    {
        id: '050', 
        name : 'Micle'
    }
]
const found = students.find(data => {
    return  data.id === '050'
})
console.log(found);
*/

/*
const students = {
    '024': {
        id: '024', 
        name : 'Pheeraphon Kunmuang'
    },
    '045' : {
        id: '045', 
        name : 'jon Hands'
    },
    '050': {
        id: '050', 
        name : 'Micle'
    }
}
console.log(students['050']);
*/


/*
const students = {
    '024': {
        id: '024', 
        name : 'Pheeraphon Kunmuang'
    },
    '045' : {
        id: '045', 
        name : 'jon Hands'
    },
    '050': {
        id: '050', 
        name : 'Micle'
    }
}
//console.log(Object.values(students));
//console.log(Object.keys(students));
const entries = Object.entries(students);
console.log(entries[0][1]);
*/







/*
const students = {
    '024': {
        id: '024', 
        name : 'Pheeraphon Kunmuang'
    },
    '045' : {
        id: '045', 
        name : 'jon Hands'
    },
    '050': {
        id: '050', 
        name : 'Micle'
    }
}

const entries = Object.entries(students);  //object to array

console.log(entries);
//array to string

const obj = {};
entries.forEach(item => {
    obj[item[0]] = item[1];
});

console.log(obj);
*/

/*
const now = new Date(); // เวลาปัจจุบัน
console.log(now);
*/

/*
const time = new Date("1999-05-30T12:05:12"); // เวลาปัจจุบัน
console.log(time.valueOf());
*/


/*
const now = new Date();
const time = new Date("1999-05-30T12:05:12"); 

console.log(time.valueOf() > time.valueOf());
*/


/*
const now = new Date("1999-05-30");
const time = new Date("1999-05-30T12:05:12"); 

console.log(
        now.getFullYear() === time.getFullYear() &&
        now.getMonth() === time.getMonth() && 
        now.getDate() === time.getDate()
);
*/






/*
const now = new Date("1999-05-30");
const time = new Date("1999-05-30T12:05:12"); 
        
const format = now.toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
})
console.log(format);
*/

/*
function print3(x){
   console.log(x);
   console.log(x);
   console.log(x);
}

print3(10);

*/





/*
function print3(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
    return "I am a function"
}

console.log(print3(10, -2,20));
*/



/*
const print3 = function (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    return "I am a function"

}

console.log(print3(10, -2, 20));

*/


/*
const print3 = (a, b, c) => {
    console.log(a);
    console.log(b);
    console.log(c);
    return "I am a function"
}
console.log(print3(10, -2, 20));
*/

/*
const add = (a,b) => {
    return a+b;
}
console.log(add(1,2));
*/



/*
const convertTHBToUSD = (thb) => {
    return thb * 0.033;
}
console.log(convertTHBToUSD(35) +  "USD");
*/


/*
const convertTHBToUSD = (thb) => {
    return thb * 0.033;
}
console.log(convertTHBToUSD(35) +  "USD");
*/

/*
const cbAdd = (a,b,cb) => {
    return cb(a+b);
}
cbAdd(1,2, (result) => {
    console.log(result);
});
*/

/*

const cbAdd = (a,b,cb) => {
    return cb(a+b),1,2,3,4;
}

cbAdd(1,2, (result,a,b,c,d) => {
    return result ** 2;
})

*/


/*ไฟล์

const fn = require('./fn')
console.log(fn(50));
*/



const fn = require('./fn')
const { } = require('./fn')
console.log(fn.data);
