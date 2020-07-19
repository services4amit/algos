

function merge(arr1, arr2) {

    let arr = [];
    let m = 0;
    let n = 0;
    while(m<arr1.length && n<arr2.length) {


        if ( (arr1[m] < arr2[n])) {
            
            arr.push(arr1[m++])
        } else {
            arr.push(arr2[n++])
        }
    }
    while(m<arr1.length){
        arr.push(arr1[m++])
    }
    while(n<arr2.length){
        arr.push(arr1[n++])
    }

    return arr;

}


console.log(merge([ 1, 3,5, 7, 9, 10], [2, 4, 6, 8]))
// console.log(undefined<9)