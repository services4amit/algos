function nestedEvenSum(obj, sum = 0) {

    for (let i in obj) {

        if (typeof obj[i] === 'object') {

            sum += nestedEvenSum(obj[i]);

        } else if (typeof obj[i] === 'number' && obj[i] % 2 == 0) {

            sum += obj[i]

        }

    }


    return sum;

    // add whatever parameters you deem necessary - good luck!
}

var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}
  console.log(nestedEvenSum({obj1}))
// for (var key in obj1) {

//     console.log(typeof obj1[key] === 'number')
// }
