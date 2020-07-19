

function ncr(n, r) {



    function ncrrec(n, r) {

        if (n == r || r == 0)
            return 1;

        return ncrrec(n-1,r-1)+ncrrec(n-1,r)


    }

    return ncrrec(n, r)

}


console.log(ncr(4, 2));