function productofarray(arr) {


    let result = 1;

    function product(ar) {

        // console.log(ar)
        if (ar.length===0)
            return;
        else result = result * ar[0]

        return product(ar.splice(1))

    };
    product(arr);


    return result;

}



console.log(productofarray([1]))