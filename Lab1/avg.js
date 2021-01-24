var avgS = [
    clss1 = [
        { name: 'Arm', grade: 4.00 },
        { name: 'Fah', grade: 4.00 },
        { name: 'June', grade: 4.00 },
        { name: 'Pond', grade: 4.00 },
        { name: 'Down', grade: 4.00 },
        { name: 'Pom', grade: 4.00 },
        { name: 'May', grade: 4.00 }
    ]
]
var avg = 0;
for (x in clss1) {
    avg = avg + clss1[x].grade
}
avg = avg / clss1.length
console.log(avg.toFixed(2))
