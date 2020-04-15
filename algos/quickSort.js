function quickSort(arr, left = 0, right = arr.length - 1) {

    if (left < right) {

        let pivotIdx = pivot(arr, left, right);
        console.log(arr, pivotIdx)
        //left
        quickSort(arr, left, pivotIdx - 1);
        //right
        quickSort(arr, pivotIdx + 1, right);

    }

    return arr;

}

function pivot(arr, start = 0, end = arr.length - 1) {

    let swapIdx = start;
    let pivotEle = arr[start];

    for (let i = start + 1; i <= end; i++) {
        if (pivotEle > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    swap(arr, start, swapIdx);
    return swapIdx;

}

let swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return arr;
}

console.log(quickSort([9, 3, 4, 5, 1, 6]));
// console.log(swap([1,2,3,4],2,3))