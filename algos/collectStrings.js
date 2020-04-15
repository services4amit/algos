function collectStrings(obj) {

    let arr = [];

    function colStr(obj) {
        for (let i in obj) {
            if (typeof obj[i] === 'object') {
                colStr(obj[i])
            } else if (typeof obj[i] === 'string') {
                arr.push(obj[i])
            }
        }


    }
    colStr(obj)

    return arr;

}


const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}
console.log(collectStrings(obj))