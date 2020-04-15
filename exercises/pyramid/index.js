// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'





function pyramid(n, row = 0, level = '') {

    if (row === n)
        return;

    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1)
    }

    mid = Math.floor((2 * n - 1) / 2);
    let add;
    if(mid-row<=level.length && mid+row>=level.length){
        add='#'
    }else{
        add=' '
    }
    pyramid(n,row,level+add)

      

}

function pyramid2(n) {

    let mid = Math.floor((2 * n - 1) / 2);
    let lev = '';
    for (let row = 0; row < n; row++) {


        lev = '';

        for (let col = 0; col < 2 * n - 1; col++) {

            // console.log(col,mid - row <= col && mid + col >= col)

            if ((mid - row <= col) && (mid + row >= col)) {
                lev += '#'

            } else {
                lev += ' '
            }

        }

        console.log(lev, lev.length)






    }

}


pyramid(3)

module.exports = pyramid;
