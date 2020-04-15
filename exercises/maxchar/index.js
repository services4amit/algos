// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

let chars={};

for(let a in str){

    // console.log("a ",str[a])
    // if(!chars[str[a]]){
    //     chars[str[a]]=1;
    // }else{
    //     chars[str[a]]++;

    // }

    chars[str[a]]=chars[str[a]]+ 1 || 1 ;

}
// console.log(chars);

console.log(Object.keys(chars)[Object.values(chars).indexOf(Math.max(...Object.values(chars)))])



}

maxChar("Hello dddddddddddddd");

module.exports = maxChar;
