function areThereDuplicates(...args) {

    console.log(args)
    let i = 0;
    let j = 1;

    while (j < args.length) {



        if (args[i] === args[j])
            return false;
        else {
            j++;
            i++;
        }



    }

    return true;

}


function areThereDuplicates2(...args) {

  

    return new Set(args).size !== args.length;
}

console.log(areThereDuplicates2(1, 2, 2,3, 4, 5))