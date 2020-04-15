// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagram2(a, b) {

    console.log(a.replace(/[^\w]/g, "").toLowerCase().split().sort())

    if (a.replace(/[^\w]/g, "").toLowerCase().split().sort().join()
     === b.replace(/[^\w]/g, "").toLowerCase().split().sort().join())
        return true;
    else
        return false
}


function anagrams(stringA, stringB) {


    let str1 = stringA.replace(/[^\w]/g, "").toLowerCase();
    let str2 = stringB.replace(/[^\w]/g, "").toLowerCase();

    // if (str1.length !== str2.length)
    //     return false;

    let obj1 = getObj(str1);
    let obj2 = getObj(str2);

    // console.log("1", Object.keys(obj1).length);
    // console.log("2", Object.keys(obj2).length)
    // if (Object.keys(obj1).length !== Object.keys(obj2).length)
    //     return false;


    for (let a in obj1) {

        if (!obj2[a])
            return false;

        else if (obj1[a] !== obj2[a]) {
            return false
        } else
            return true;

    }



}

function getObj(str) {




    let obj = {}
    for (let a of str) {

        obj[a] = obj[a] + 1 || 1

    }

    // console.log(obj)
    return obj




}
// getObj("ssssfeg")

// console.log(
//     anagrams('Hi there', 'Bye there')

// )

console.log(anagram2("asa", "asa"))
module.exports = anagrams;
