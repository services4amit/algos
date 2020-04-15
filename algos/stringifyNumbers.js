function stringifyNumbers(obj) {


    // if (obj === [])
    //     return;

    let nObj = {};

    for (let i in obj) {

        if (typeof obj[i] === 'object' && !Array.isArray(obj[i])) {
            // console.log(obj[i])
            nObj[i]=stringifyNumbers(obj[i])
        } else if (typeof obj[i] === 'number') {
            nObj[i] = obj[i].toString()
        } else {
            console.log(obj[i])
            nObj[i] = obj[i]
        }
    }
    return nObj;

}


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
console.log(stringifyNumbers(obj))