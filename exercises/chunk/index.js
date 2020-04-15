// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

    // let chunked = [];
    // for(let ele of array){
    //   let last=chunked[chunked.length-1];
    // //   console.log("last ",chunked)

    //   if(!last || last.length===size){
    //       chunked.push([ele]);
    //   }else{
    //       last.push(ele)
    //   }

    // }

    let i = 0;
    let chunked = [];
    while (i < array.length ) {

   chunked.push(array.slice(i,i+size));
   i+=size;


    }

    console.log(chunked)






}

// function getTreatment(array){
//     treatments=  array.map((ele)=>ele[2])
//     console.log(treatments)
// }
// getTreatment([ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ])
chunk([1, 2, 3, 4, 5], 10);

// console.log(!undefined)
module.exports = chunk;


