function test(arr) {

    let k;
    let count = 0;
    let tempCount = 0;
    let res = [];
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == k) {
            tempCount++;
            count++;
            if (tempCount == 1) {
                res.push(arr[i])
            }

        } else {
            k = arr[i];
            tempCount = 0;

        }
    }
    console.log(count,res)
}

console.log(test([0, 1, 2, 2, 2, 3, 3, 4, 5, 6, 9, 10]))