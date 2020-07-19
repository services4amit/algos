function test(tsize, arr1, arr2) {

    let count = 0;
    let temparr1 = [];
    let temparr2 = [];
    arr1.sort();
    arr2.sort();
    for (let i = 0; i < tsize; i++) {

        if (arr1[i] > arr2[i]) {
            count++;

        } else {
            temparr1.push(arr1[i])
            temparr2.push(arr2[i])
        }
    }
    temparr1.sort().reverse()
    for (let k = 0; k < temparr1.length; k++) {
        if (temparr1[k] > temparr2[k]) {
            count++;

        }
    }

    console.log(count)

}

console.log(test(10, [3, 6, 7, 5, 3, 5, 6, 2, 9, 1], [2, 7, 0, 9, 3, 6, 0, 6, 2, 6]))