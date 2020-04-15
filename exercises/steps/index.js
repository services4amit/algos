// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n,m=4) {

//     // console.log("inside")
//     if (n ===0) {
//         return ;
//     }

    
//     let k=n;
//     while(m-k>=0){
//         process.stdout.write("#");
//         k++;
//     }

//     // //For descending
//     // while(m>0){
//     //     process.stdout.write("#");
//     //     m--;
//     // }
    

//     console.log()
//     steps(n - 1,n+1)

// }

function print(num){
    if(num===0)
    return;
    process.stdout.write('#');
    print(num-1);

}


function steps2(n,i=1){
    if(n===0)
    return;

    print(i);
    console.log()
    steps2(n-1,i+1)

}


// console.log(steps(4));

console.log(steps2(4));

// module.exports = steps;
