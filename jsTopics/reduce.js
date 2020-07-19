let arr = [1, 2, 3, 4, 5];

res = arr.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue
}, 20)
console.log(res)