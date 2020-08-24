function countPairs(numbers, k) {
    // Write your code here
    let count = 0;
    let arr = [];
    for (let i = 0; i < numbers.length; i++) {
        
        for (let j = 0; j < numbers.length; j++) {
            
            if (Math.abs(numbers[i] - numbers[j]) == k) {

                if (arr.includes(numbers[i]) && arr.includes(numbers[j])) {


                } else {

                    count++;
                    arr.push(numbers[i]);
                    arr.push(numbers[j])
                }
            }
        }
      
    }
    return count;

}

console.log(countPairs([6, 1, 2, 3, 4, 5, 6], 2))

numbers.sort((a,b) => (a - b))
let result = 0
for(let i = 0; i < numbers.length; i++){
    if(i > 0 && numbers[i] === numbers[i - 1])
        continue
    for(let j = i + 1; j < numbers.length; j++){
        let diff = numbers[j] - numbers[i]
        if(diff === k){
            result += 1
            break
        }
        if(diff > k) break
    }
}
return result



