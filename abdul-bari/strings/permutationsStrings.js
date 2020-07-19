function perms(str, k) {

    let arr = [];

    let len = str.length;

    function permutations(str, k) {

        if (k === len) {
            arr.push(str);
            return;
        }


        for (let i = k; i < len; i++) {
            let swapped = swap(str, k, i);

            permutations(swapped, k + 1)

            
        }

    }
    permutations(str, 0)
    return arr;
}


function swap(str, i, j) {

    let arr = str.split('')
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    // console.log(arr[i],arr[j])

    return arr.join('');
}

console.log(perms("abc", 0))

// console.log("asd".split('').join(''))