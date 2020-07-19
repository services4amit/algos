function search(arr, num) {

    let low = 0;
    let high = arr.length - 1;
    let mid = Math.ceil((low + high) / 2);
    console.log("5", low, mid, high)
    let resp = false;
    while (low <= high) {
        // console.log("9",low,mid)
        mid = Math.ceil((low + high) / 2);
        if (arr[mid] == num || arr[low] == num || arr[high] == num) {
            return true;
        }
        if (arr[mid] <= arr[high]) {

            //right sorted
            if (num <= arr[high] && num > arr[mid]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }else{

            //left sorted
            if(arr[low]<=num && num<arr[mid]){
                high=mid-1;
            }else{
                low=mid+1
            }
        }


        // if (arr[mid] > arr[high] && num < arr[low] && num < arr[mid]) {

        //     low = mid + 1;
        //     mid = Math.ceil((low + high) / 2);

        // } else {
        //     high = mid - 1;
        //     mid = Math.ceil((low + high) / 2);
        // }

    }
    return false;

}

console.log(search([7, 8, 9, 10, 11, 1, 2, 3, 4, 5], 8))

// let low = 0;
// let high = ;
// let mid = Math.floor((low + high) / 2);

// console.log(mid)