function missing(arr) {

    let low = arr[0];
    let i=0;
    let miss=[]
while(i<arr.length){

    if(arr[i]-i!==low){

        miss.push(i+low);
        while(low<(arr[i]-i-1)){
            low++;
            miss.push(low+i)
        }
        low=arr[i]-i;
    }
    i++;
}

return miss;
}

console.log(missing([1, 2, 3, 4, 5, 6, 9,16]))