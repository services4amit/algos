function isPalindrome(arr) {

    if (arr.length === 0)
        return false;



    function rev(str) {

        if (str.length <= 1)
            return str;

        return rev(str.slice(1)) + str[0]

    }
    let a = rev(arr)

    return a == arr

}

function isPalindrome2(arr) {

    if (arr.length === 0) {
        console.log("1")
        return true;
    }


    if (arr.length === 1) {
        console.log("2")
        return true;
    }


    if (arr.length === 2) {

        console.log("3")
        if (arr[0] === arr[1])
            return true;
        else return false
    }




    if (arr[0] == arr.slice(-1)) {
        return isPalindrome2(arr.slice(1, -1))
    }





}


console.log(isPalindrome2("aassaa"))

let arr = "aa";

// console.log((arr[0] == arr.slice(-1)))
// console.log(arr.slice(1))