// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {



    let len = arr.length;
    let temp;
    for (let i = 0; i < len; i++) {

        for (let j = 0; j < len - i; j++) {

            if (arr[j] > arr[j + 1]) {

                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;

}

function selectionSort(arr) {


    let indexOfMin;
    for (let i = 0; i < arr.length; i++) {

        indexOfMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j
            }

        }
        if (arr[i] !== arr[indexOfMin]) {
            temp = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = temp;
        }
    }

    return arr;

}

function mergeSort(arr) {

    if (arr.length === 1)
        return arr;

    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center)


    return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right) {

    let results = []
    while (left.length > 0 && right.length > 0) {

        if (left[0] < right[0])
            results.push(left.shift())
        else results.push(right.shift())

    }


    return [...results, ...left, ...right];

}


// console.log(bubbleSort([44, 66, 11, 22, 33]))

// console.log(selectionSort([44, 66, 11, 22, 33]))

console.log(mergeSort([44, 66, 11, 22, 33]))

// console.log(merge([1, 3, 5, 7], [2, 4, 6, 8]))
// let arr = [1, 2, 3]
// console.log(arr.shift(),arr.length)
// console.log(arr.shift(),arr.length)

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
