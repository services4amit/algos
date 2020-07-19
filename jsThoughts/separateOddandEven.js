function sum(arr) {

    let i = 0;
    let j = arr.length;

    while (i < j) {

        if (arr[i] % 2 != 0 && arr[j] % 2 == 0) {
            swap(arr, i, j);
            i++;
            j--;
        } else {
            j--;
        }
    }

    return arr;
}

function swap(arr, i, j) {


    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    // console.log(arr[i],arr[j])

    return arr;
}

console.log(sum([11,5,7,2,4,6,8,71,1,0]))