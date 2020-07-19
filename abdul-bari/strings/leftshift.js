function leftshift(arr,ele){

    let len=arr.length-1;
    reverse(arr);
    
    reverse(arr,0,len-ele)
    reverse(arr,len-ele+1,len)
    return arr;



}

function reverse(arr,y=0,x=arr.length-1) {
    let i = x;
    let j = y;

    while (j < i) {
        swap(arr,i,j);
        i--;
        j++;
    }

    return arr

}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    return arr;
}

console.log(leftshift([1, 2, 3, 4, 5],2))