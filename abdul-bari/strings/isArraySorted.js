function sorted(arr){
let sorted=true;
    for(let i=0;i<arr.length-2;i++){
        if(arr[i]>arr[i+1]){
            sorted=false;
            break;
        }
        
    }
    return sorted;
}


console.log(sorted([1,2,5]))