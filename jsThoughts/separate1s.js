function sum(arr) {

    let i=0;
    let j=arr.length;

    while(i<j){

        if(arr[i]==1 && arr[j]==0){
            swap(arr,i,j);
            i++;
            j--;
        }else{
            j--;
        }
    }

    return arr;
}

function swap(arr, i, j) {

   
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    // console.log(arr[i],arr[j])

    return arr;
}

console.log(sum([1,1,1,10,0,0,0,1,1,0]))