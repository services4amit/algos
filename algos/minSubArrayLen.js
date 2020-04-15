function minSubArrayLen(arr,num){


    let start=end=total=0;
    let milLength=Infinity;

    while(start<arr.length){


        if(total<num && end < arr.length){
            total+=arr[end];
            end++;
        }                                 
        else if(total>=num && start < arr.length){  

            milLength=Math.min(milLength,end - start);
            // console.log(milLength)
            total-=arr[start]
            start++;
            


        }else{
            break;
        }



    }

    return milLength;

}

console.log("res",minSubArrayLen( [1,2,3,4,5,6,12],7))