
 function setTime() {

    return new Promise((resolve, reject) => {

       setTimeout(function () {

            return "hi"
         }, 3000)

    })


}

let a=setTime();
console.log(a)