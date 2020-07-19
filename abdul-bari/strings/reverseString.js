function reverse(arr) {
    let rev = '';

    for (let i = 0; i < arr.length; i++) {
        rev = arr[i] + rev;
    }


    return rev

}

function reverse2(arr) {
    let rev = new Array(26);
    console.log(rev)

    for (let k = 0; k < arr.length; k++) {
        let position=arr[k].charCodeAt() - 97;
        if(rev[position]==undefined){
            rev[position] = 1;
        }else{
            rev[position]++;
        }
        
    }
    return rev

}



console.log(reverse2("aaaasdfg"))

// console.log("a".charCodeAt())

