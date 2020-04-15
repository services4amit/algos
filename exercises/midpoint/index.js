// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

const { LinkedList } = require('./linkedlist')

function midpoint(list) {


    console.log(list.size())
    let len = list.size() % 2 == 0 ? (list.size() / 2) : Math.ceil((list.size() / 2) - 1);

    let start = list.getAt(0);
    let count = 0;
    while (start.next) {

        start = start.next;
        count++;
        if (count === len) {
            return start.data
        }

    }


}

function midpoint2(list) {



    let slow = fast = list.getAt(0);
    // let fast = list.getAt(0);

    while (slow.next) {


        if (slow.next && fast.next && fast.next.next) {

            slow = slow.next;
            fast = fast.next.next;
            


        }else{

            return slow.data
        }


    }
}


const l = new LinkedList();
l.insertLast('a')
l.insertLast('b')
l.insertLast('c')
// l.insertLast('d')
// l.insertLast('cw')
// l.insertLast('de')
// l.insertLast('df')
// l.insertLast('dfz')
console.log(midpoint2(l)); // returns { data: 'b' }
module.exports = midpoint;
