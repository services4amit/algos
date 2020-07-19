function test(arr) {

    let k;
    let count = 0;
    let tempCount = 0;
    let res = [];
    for (let i = 0; i < arr.length; i++) {

        if (res[arr[i]] == undefined) {
            res[arr[i]] = 1;
        } else {
            res[arr[i]]++;
        }

    }
    console.log(count, res)
}

console.log(test([0,3, 4, 5, 6, 9, 10 ,1, 2, 2, 2, 3]))