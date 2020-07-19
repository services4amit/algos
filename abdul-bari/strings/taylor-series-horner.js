


function taylorhorner(x, n) {

    let p = 1;
    let f = 1;
    let res=1;


    function taylorRecursion(x, n) {
        if (n == 0)
            return res;

        res = 1+ (x /n)*res;

        return taylorRecursion(x, n - 1);

    }

    return taylorRecursion(x, n)

}


function taylorhornerloop(x, n) {
    let res = 1;

    for (let i = n; i > 0; i--) {

        res = 1 + (x / i) * res;
    }

    return res

}

console.log(taylorhorner(1, 10));