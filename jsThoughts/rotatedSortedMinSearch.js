function search(arr) {

    let low = 0;
    let high = arr.length - 1;
    let mid = Math.floor((low + high) / 2);
    // console.log("5", low, mid, high)
    
    while (low < high) {
       
        mid = Math.floor((low + high) / 2);
        console.log("logs",low,mid,high)
        // if (arr[mid] == num || arr[low] == num || arr[high] == num) {
        //     return true;
        // }
        if (arr[mid] > arr[high]) {

            //right side
            
                low = mid + 1;
            
            
        }else{

            //left sorted
        
            high = mid;
        }


        // if (arr[mid] > arr[high] && num < arr[low] && num < arr[mid]) {

        //     low = mid + 1;
        //     mid = Math.ceil((low + high) / 2);

        // } else {
        //     high = mid - 1;
        //     mid = Math.ceil((low + high) / 2);
        // }

    }
    return arr[low];

}

console.log(search([7, 8, 9, 10, 11, 3, 4, 5]))

// let low = 0;
// let high = ;
// let mid = Math.floor((low + high) / 2);

// console.log(mid)