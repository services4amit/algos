


function taylor(x,n) {

    let p = 1;
    let f = 1;
    let res;


    function taylorRecursion(x, n) {
        if (n == 0)
            return 1;

        res = taylorRecursion(x, n - 1);
        p = p * x;
        f = f * n;
        return res + p / f;
    }

    return taylorRecursion(x, n)

}

console.log(taylor(1,10));