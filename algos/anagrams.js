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
        if (!obj2[i])
            return false;

        if (obj1[i] !== obj2[i])
            return false;
    }

    return true;


    
}

function lookup(arr1, arr2) {

    if (arr1.length !== arr2.length)
        return false;

        let obj1 = {}
       
    
        for (let i of arr1) {
            obj1[i] = obj1[i] + 1 || 1;
        }

        for(let i of arr2){

            if(!obj1[i])
            return false;
            else{
                obj1[i]-=1;
            }
        }

        return true;


}








function validAnagram(a, b) {



    if (a.split('').sort().join('') === b.split('').sort().join(''))
        return true;
    else
        return false;

    // add whatever parameters you deem necessary - good luck!
}


console.log(lookup('anagram', 'anagaram'))

// console.log('ba'.split('').sort().join(''))