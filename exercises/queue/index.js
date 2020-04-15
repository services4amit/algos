// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {

    constructor() {
        this.arr = [];
    }

    add(ele) {

        this.arr.unshift(ele);
    }


    dis(){
        return this.arr;
    }




}



let a=new Queue();
a.add(4);
a.add(41);
a.add(42);
console.log(a.dis())






function q() {

    let a = [];

    // a.push(1)
    // a.push(122)
    // a.push(144)
    a.unshift(1)
    a.unshift(122)
    a.unshift(144)
    a.pop()
    console.log(a)

}

// q();

module.exports = Queue;
