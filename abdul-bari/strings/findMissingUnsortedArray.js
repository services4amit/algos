function missing(arr) {

    let res = []
    for (let i = 0; i < arr.length; i++) {

        res[arr[i]] = arr[i];
    }

    let finalRes=[];
   for(let k=0;k<res.length;k++){
       if(res[k]==undefined){
        finalRes.push(k)
       }
       
    //    console.log(res[k])
   }
    // console.log(res)
return finalRes

}

console.log(missing([0,1, 2, 3, 4, 5, 6, 9, 10]))