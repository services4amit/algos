function radixSort(arr) {


    let mostDig = mostDigits(arr);
    console.log(mostDig)

    let digitBuckets;
    for (let i = 0; i < mostDig; i++) {
        digitBuckets = Array.from({ length: 10 }, () => []);

        // console.log(digitBuckets)
        for (let j = 0; j < arr.length; j++) {
            let digit = getDigit(arr[j], i);
            digitBuckets[digit].push(arr[j])
        }
        arr = [].concat(...digitBuckets)

    }

    return arr;

}


function digitCount(num) {
    if (num == 0)
        return 1;

    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getDigit(num, place) {


    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}


function mostDigits(arr) {

    let max = 0;
    for (let i = 0; i < arr.length; i++) {

        max = Math.max(max, digitCount(arr[i]))
    }
    return max;
}


console.log(radixSort([1, 2222,2,77777777777,12, 12,33,12, 44]))

// console.log(getDigit(-12355, 9))