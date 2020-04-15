// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3




function memoize(fn) {

    const cache = {};

    return function (...args) {
        if (cache[args])
            return cache[args]

        const results = fn.apply(this, args);
        cache[args] = results;

        return results;

    }

}

function fib(n) {

    if (n < 2)
        return n;
    return fibb(n - 1) + fibb(n - 2)

}


// console.log(fib(40));

const fibb = memoize(fib)

console.log("memo ", fibb(60))

module.exports = fib;
