function reverse(arr) {
    let i = arr.length - 1;
    let j = 0;

    while (j < i) {
        swap(arr,i,j);
        i--;
        j++;
    }

    return arr

}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    return arr;
}

console.log(reverse([1, 2, 3, 4, 5]))