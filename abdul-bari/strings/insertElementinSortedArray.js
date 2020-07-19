function insertArray(arr, ele) {

let i=arr.length-1;
    while(arr[i]>ele){
        arr[i+1]=arr[i];
        i--;
    }
    arr[i+1]=ele;

    return arr;

}


console.log(insertArray([1, 2, 3, 44, 55], 20))