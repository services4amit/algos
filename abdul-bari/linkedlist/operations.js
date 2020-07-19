const { LinkedList, Node } = require('./linkedlist');



let list =new LinkedList([2,2,2,2,4,5,67]);

let list1 =new LinkedList([22,42,51]);

// console.log(list)
list.display()
// list.reverse();
// list.concat(list1)
list.merging(list1)
list.display()
// console.log(list.getMax())
