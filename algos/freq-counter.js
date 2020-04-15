function freq(arr1, arr2) {

    if (arr1.length !== arr2.length)
        return false

    let obj1 = {}
    let obj2 = {}

    for (let i of arr1) {
        obj1[i] = obj1[i] + 1 || 1;
    }
    for (let i of arr2) {
        obj2[i] = obj2[i] + 1 || 1;
    }
    console.log(obj1, obj2)
    for (let i in obj1) {

        console.log(i)
        // if (!obj2.hasOwnProperty(i ** 2))
        // if (!(i**2  in obj2))
        if (!obj2[i ** 2])
            return false;

        if (obj1[i] !== obj2[i ** 2])
            return false;
    }

    return true;



}

function freq2(num1, num2) {

    let arr1 = num1.toString();
    let arr2 = num2.toString();

    console.log(arr1, arr2)

    if (arr1.length !== arr2.length)
        return false

    let obj1 = {}
    let obj2 = {}

    for (let i of arr1) {
        obj1[i] = obj1[i] + 1 || 1;
    }
    for (let i of arr2) {
        obj2[i] = obj2[i] + 1 || 1;
    }
    console.log(obj1, obj2)
    for (let i in obj1) {

        console.log(i)
        // if (!obj2.hasOwnProperty(i ** 2))
        // if (!(i**2  in obj2))
        if (!obj2[i])
            return false;

        if (obj1[i] !== obj2[i])
            return false;
    }

    return true;



}

// console.log(freq([1, 2, 1], [1, 4, 1]))
console.log(freq2(123, 211))

