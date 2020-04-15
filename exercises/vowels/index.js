// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

let vow='aeiou';
let count=0;
for(let a of str){

    if(vow.includes(a))
    count++;
}

console.log(count)

}

function vowels2(str) {

    return (str.split('').filter(a=> "aeiou".includes(a))).length
    
    }


console.log(vowels2('Hi There!'))

module.exports = vowels;
