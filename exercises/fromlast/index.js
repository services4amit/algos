// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

const { LinkedList } = require('./linkedlist')

function fromLast(list, n) {

    let slow = fast = list.getAt(0);

    for (let i = 0; i < n; i++) {

        fast = fast.next;

    }


    while(fast.next){
        slow=slow.next;
        fast=fast.next;
    }

    return slow.data




}



const list = new LinkedList();
list.insertLast('a');
list.insertLast('b');
list.insertLast('c');
list.insertLast('d');
console.log(fromLast(list, 1)) // 'b'
module.exports = fromLast;
