function capitalizeWords(arr) {

    let nArr = [];

    function cap(arr) {
        if (arr.length == 0)
            return;


        nArr.push(arr[0].toUpperCase());

        return cap(arr.slice(1));


    }
    cap(arr)
    return nArr;

}

console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']))