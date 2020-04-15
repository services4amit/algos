


function findLongestSubstring2(str) {

    if (str.length === 0) {
        return 0
    }
    let start = 0;
    let i = 0;
    let max = 0;
    let seen = {};

    while (i < str.length) {
        let char = str[i]
        // console.log(char)

        if (seen[char]) {
            start = Math.max(seen[char], start);

        }

        max = Math.max(max, i - start + 1);

        seen[char] = i + 1;
        i++;


    }

    return max;




    // add whatever parameters you deem necessary - good luck!
}

console.log(findLongestSubstring2("longestsubstring"))
// let ar=[];
// ar.push("d")
// ar=[]
// console.log(ar.length)