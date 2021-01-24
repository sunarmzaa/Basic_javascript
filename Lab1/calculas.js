const cal = () => {
    let cal_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    var arr=[[]]
    for (x in cal_arr) {
        console.log('MUL:' + cal_arr[x])
        for (y in cal_arr) {
            arr[y] = cal_arr[y] * cal_arr[x]
            arr[y] = cal_arr[x]+'x'+cal_arr[y]+'='+arr[y] 
        }
        console.log(arr)
        console.log('--------------------------')
    }
}
cal(); 