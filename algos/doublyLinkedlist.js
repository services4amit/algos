class Node {

    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedlist {


    constructor() {
        this.head = null;
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

    insertFirst(data) {

        let node = new Node(data);
        if (this.head) {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        } else {
            this.head = node;
        }

    }

    insertLast(data) {

        let node = new Node(data);

        if (this.head) {
            let start = this.head;
            while (start.next) {

                start = start.next;
            }
            start.next = node;
            node.prev = start;
        } else {
            this.head = node;
        }


    }

    removeLast() {
        if (this.head) {

            let node = this.head;
            while (node.next) {
                node = node.next;
            }

            node.prev.next = null;

        }


    }
    removeFirst() {

        let node = this.head;
        node.next.prev = null;
        this.head = node.next;
    }


    getAt(pos) {

        let count = 0;
        let node = this.head;
        while (node.next) {


            if (count == pos)
                return node.data;


            node = node.next;
            count++
        }
        return null;
    }

    setAt(pos, data) {

        let count = 0;
        let node = this.head;
        while (node.next) {


            if (count == pos) {
                node.data = data;
                return node.data;

            }



            node = node.next;
            count++
        }
        return null;
    }

    insertAt(pos, data) {

        if (pos == 0) {
            this.insertFirst(data);
            return;
        }

        let count = 0;
        let node = new Node(data);
        let start = this.head;

        while (start) {

            if (count == pos) {

                node.prev = start.prev;
                start.prev.next = node;
                node.next = start;
                start.prev = node;
                // console.log("check",node.prev,node.next)
                return node.data
            }

            count++;
            start = start.next;
        }
        return null;

    }

    removeAt(pos) {


        let start = this.head;
        let count = 0;

        while (start) {

            if (pos == count) {
                start.prev.next = start.next;
                start.next.prev = start.prev;
                return;
            }
            count++;
            start = start.next;
        }

    }



    reverse() {


        let node=this.head;
        
        let temp=null;

        while(node){
            temp=node.prev;
            node.prev=node.next;
            node.next=temp;
            node=node.prev;

        }

        this.head=temp.prev;
    }

}


let list = new DoublyLinkedlist();

list.insertLast(5);
list.insertLast(51);
list.insertLast(7);
console.log(list.print())
// console.log(list)
// console.log(list.setAt(1, 77));
console.log(list.reverse())
console.log(list.print())
// console.log(list)