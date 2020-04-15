function capitalizeFirst(arr) {

let nArr=[]
    
    function capital(arr) {

        if (arr.length === 0) {
            return;

        }
        
        nArr.push(arr[0][0].toUpperCase()+arr[0].slice(1))
        // console.log(arr)

        return capital(arr.slice(1))
    }

    capital(arr);
    return nArr;


}

console.log(capitalizeFirst(['car', 'taco', 'banana']))
let a = "afaf";
b = a[0].toUpperCase()
// console.log(['car', 'taco', 'banana'].slice(1))