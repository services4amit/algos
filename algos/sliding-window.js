function slidingwindow(arr,num){

    let maxsum=tempsum=0;

    let j=0;
    while(j<num){
        maxsum+=arr[j];
        j++;
    }
    tempsum=maxsum;

    for(let i=num;i<arr.length;i++){

        tempsum=tempsum-arr[i-num]+arr[i];
        maxsum=Math.max(tempsum,maxsum)

    }

    return maxsum;


}


console.log(slidingwindow([1,2,3,4,5,6,12],2))