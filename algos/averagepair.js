function averagepair(arr, avg) {

    if(arr.length===0)
    return null;

    let i = 0;
    let j = arr.length - 1;

    while(i<=j){

        if(((arr[i]+arr[j])/2)<avg){
            i++;
        }
        else if(((arr[i]+arr[j])/2)>avg){
            j--;
        }
        else
        return {a:arr[i],b:arr[j]}
    }

     return null


}


console.log(averagepair([1, 1, 1, 2, 2], 2))