function test(arr) {


    let min = 0;
    let max = 0;
    let res = [];
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > max) {
            max = arr[i]
        } else if (arr[i] < min) {
            min = arr[i]
        }

    }
    console.log(max, min)
}

console.log(test([0, 1, 2, 2, 2, 3, 3, 4, 5, 6, 9, 10]))