function unique(arr) {



    if(arr.length===0){
        return 0
    }
    let i = 0;
    let j = 1;

    while (j < arr.length) {
        if (arr[i] === arr[j]) {
            j++;
        } else {
            arr[i + 1] = arr[j];
            i++;
        }
    }
    return i + 1;
}


console.log(unique([]))
// console.log("This is an exception".includes("%exc%"))