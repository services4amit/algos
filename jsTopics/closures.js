
// closures: function returns another function. the execution context relationship between those functions
// In above case though execution context of parent fun is not der still child method has access
// to the its variable

function greet(salutation) {

    return function (name) {
        console.log(salutation + " " + name)
    };
}

let callGreet = greet("hi");

// callGreet("Ajit")


//Closure with IIFE
function greetNum() {

    let arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(function () {
            console.log(i)
        });
    }

    return arr;

}

// let callGreet = greet("hi");

// callGreet("Ajit")

let callGreetAgain = greetNum();

// callGreetAgain[0]()
// callGreetAgain[1]()
// callGreetAgain[2]()

//closure with returning object

function increment() {

    let count = 0;

    function increase() {
        count++;
        console.log("Count increased ")
    }
    function reset() {
        count = 0;
        console.log("Count reset done ")
    }
    print = () => {
        console.log("Count is ", count)
    }




    console.log("inside return")

    return {
        increase: function () { increase() },
        print: function () {
            print()
        },
        reset: function () { reset() }

    }




}

let callincrement = increment();
callincrement.increase()
callincrement.increase()
callincrement.reset()
callincrement.print()