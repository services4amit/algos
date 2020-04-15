function binarysearch(arr, num) {

    let min = 0;
    let max = arr.length - 1;

    let mid = Math.floor((min + max) / 2);

    let ele; 
    while (min <= max) {
        ele= arr[mid]
        if (num > ele) {
            mid++;
            min = mid;
        }
        else if (num < ele) {
            mid--;
            max = mid;
        } else
            return mid;


    }

    return null;


}


console.log(binarysearch([1, 2, 3, 4, 5, 7], 88))