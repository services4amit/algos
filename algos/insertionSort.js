function insertionSort(arr) {

    let currentValue;
    let currentPos;

    let j;
    let i;
    for (i = 1; i < arr.length; i++) {
        currentValue = arr[i];
        for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j + 1] = arr[j];
            
        }


        arr[j + 1] = currentValue;

    }


    return arr;
}


console.log(insertionSort([1, 44, 2, 4, 5, 6]))