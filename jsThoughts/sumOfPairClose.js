function sum(arr, num) {

    let diff = 0;
    let a;
    let b;
    let i = 1;
    j = 2;
    
    diff = Math.abs(num -( arr[0] + arr[1]));
    console.log(diff)
    while (j < arr.length) {
        
        if (Math.abs(num - arr[i]-arr[j])<diff){
            
            diff=Math.abs(num - arr[i]-arr[j]);
            a=arr[i];
            b=arr[j];
            
        }
        i++;
        j++;
    }

    return {a:a,b:b};

}

console.log(sum([1, 2, 4, 5, 6, 7, 22], 24))