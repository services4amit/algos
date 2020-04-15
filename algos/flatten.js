function flatten(arr) {

    let nArr = []
    function flat(arr) {

        if (arr.length == 0)
            return

        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                flat(arr[i])
            } else {
                nArr.push(arr[i])
            }
        }




    }

    flat(arr);

    return nArr;

}


console.log(flatten([1, 2, 3, [4, 5]]))