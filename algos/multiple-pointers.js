function mulpointers(arr) {


    let start = 0;
    let end = arr.length - 1;

    while (start < end) {

console.log(start,end)
        if (arr[start] + arr[end] === 0) {

            return {
                start: arr[start],
                end: arr[end]
            }
        }
        else if (arr[start] + arr[end] > 0) {

            end--;

        }
        if (arr[start] + arr[end] > 0) {
            start++;
        }

    }
    return false;
}


console.log(mulpointers([-4,-1,1,2,3,44,5]))