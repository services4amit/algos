// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

    constructor(data, next = null) {

        this.data = data;
        this.next = next;

    }
}

class LinkedList {

    constructor() {
        this.head = null;
    }

    insertFirst(data) {

        this.head = new Node(data, this.head)

    }

    size() {

        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    getFirst() {
        let node = this.head;
        return node.data;

    }
    getLast() {
        let node = this.head;
        let prev;
        while (node) {
            prev = node;
            node = node.next;
        }
        return prev.data;

    }

    clear() {

        this.head = null;

    }

    removeFirst() {
        let node = this.head;
        node = node.next;
    }

    removeLast() {
        let node = this.head;
        let prev;
        while (node.next) {
            prev = node;
            node = node.next;
        }
        prev.next = null;

    }


    insertLast(data) {

        let node = this.head;
        while (node.next) {
            node = node.next;
        }
        node.next = new Node(data)
    }

    getAt(pos) {

        if (pos === 0) {
            return this.head.data;
        }

        let count = 0;
        let node = this.head;
        while (node) {
            node = node.next;
            count++;
            if (count === pos)
                return node.data

        }

    }

    removeAt(pos) {
        if (pos === 0) {
            return this.head = null;
        }

        let count = 0;
        let node = this.head;
        let prev;
        while (node) {
            prev = node;
            node = node.next;
            count++;
            if (count === pos) {
                prev.next = node.next
            }


        }

    }

    print() {

        let arr = [];
        let node = this.head;
        while (node) {
            // console.log(node)
            arr.push(node.data);
            node = node.next

        }
        return arr;
    }
    reverse() {

        let node = this.head;
        // console.log(node)
        let temp=null;
        let prev=null;
        while (node) {
            
            temp = node.next;
            node.next = prev;
            prev = node;                                     [ 'c', 'b', 'a', 5 ]
            node = temp;
            // console.log("rev",node,prev)
        }
        console.log(this.head)
        this.head=prev;
        return prev;
    }
}

let list = new LinkedList();

let node = new Node(5);
list.head = node;
                                            
list.insertFirst('a');
list.insertFirst('b')
list.insertFirst('c')

// console.log(list.size());
console.log(list.reverse())
console.log(list.print());
// list.insertLast('l')
// console.log(list.getAt(2))
// list.removeAt(1)
// console.log(list.size());
console.log(list);
// list.clear()
// console.log(list.size());
// console.log(list);

// console.log(list.getFirst())
// console.log(list.getLast())



module.exports = { Node, LinkedList };
