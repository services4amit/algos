function test(arr, sum) {

    let k;
    let count = 0;
    let tempCount = 0;
    let res = [];
    for (let i = 0; i < arr.length; i++) {

        if (res[arr[i]] == undefined) {
            res[arr[i]] = 1;
            if (res[sum-arr[i]] == 1 && arr[i]!=sum/2) {
                console.log("pair is ",arr[i],sum-arr[i])
            }
        } 

    }
    console.log(res)
}

console.log(test([0, 1, 2, 2, 2, 3,3, 4, 5, 6, 9, 10] ,10))