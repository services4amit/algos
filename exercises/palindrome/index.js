// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

    // let a = ''

    // console.log(str === str.split('').reduce((a, current) => {
    //     return current + a;

    // }, ''))

    console.log(str.split('').every((char,index)=>{

        return char===str[str.length-index-1]
    }))




}

palindrome("addaa")

module.exports = palindrome;
