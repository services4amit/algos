function multiply(a, b) {
    return a * b;
}

let mulBytwo=multiply.bind(this,2,5)
console.log(mulBytwo(4))