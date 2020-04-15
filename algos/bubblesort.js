function bubblesort(arr) {

    let temp;
    let noSwap = true;
    let counter = 1;
    for (let i = 0; i < arr.length ; i++) {
        noSwap = true;
        for (let j = 0; j < arr.length - i ; j++) {

            counter++;
            // console.log(arr)
            if (arr[j] > arr[j + 1]) {
                noSwap = false;
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        if (noSwap)
            break;
    }

    console.log("c",counter)

    return arr;
}

console.log(bubblesort([22, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))