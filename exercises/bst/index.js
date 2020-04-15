// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {


    constructor(data) {

        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {

        if (data < this.data && this.left) {
            this.left.insert(data)
        } else if (data < this.data) {
            this.left = new Node(data)
        } else if (data > this.data && this.right) {
            this.right.insert(data)
        } else if (data > this.data) {
            this.right = new Node(data)
        }
    }

    contains(data) {

        // console.log(data, this.data)
        if (this.data == data)
            return this.data
        else if (data < this.data && this.left)
            return this.left.contains(data)
        else if (data > this.data && this.right)
            return this.right.contains(data)
        else return null;

    }




}

class BST {

    constructor() {
        this.root = null;

    }

    bfs() {
        let arr = [this.root];
        let elements = [];


        while (arr.length) {

            let current = arr.shift();
            elements.push(current.data);
            if (current.left) {
                arr.push(current.left)
            }
            if (current.right) {
                arr.push(current.right)
            }
        }
        return elements;
    }

    dfsPre() {
        let arr = [this.root];
        let elements = [];


        // function dfsHelper() {

        while (arr.length) {

            let current = arr.shift();
            elements.push(current.data);
            if (current.right) {
                arr.unshift(current.right)
            }
            if (current.left) {
                arr.unshift(current.left)
            }

        }
        // }

        return elements;
    }

    dfsPre2() {

        let elements = [];

        function traverse(node) {

            elements.push(node.data);
            if (node.left) {
                traverse(node.left);
            }

            if (node.right) {
                traverse(node.right)
            }

        }
        traverse(this.root);
        return elements;
    }

    dfsPost() {
        let arr = [this.root];
        let elements = [];


        // function dfsHelper() {

        while (arr.length) {

            let current = arr.shift();
            elements.unshift(current.data);
            if (current.left) {
                arr.unshift(current.left)
            }
            if (current.right) {
                arr.unshift(current.right)
            }


        }
        // }

        return elements;
    }
    dfsPost2() {

        let elements = [];
        function traverse(node) {

            if (node.left)
                traverse(node.left)
             if (node.right)
                traverse(node.right)
            elements.push(node.data)

        }
        traverse(this.root);
        return elements;
    }

    dfsIn() {

        let elements = [];


        function traverse(node) {

            if (node.left)
                traverse(node.left);
            elements.push(node.data)
            if (node.right)
                traverse(node.right);
        }
        traverse(this.root)

        return elements;
    }



}
const node = new Node(10);
let tree = new BST();
tree.root = node;
node.insert(6);
node.insert(15);
node.insert(3);
node.insert(8);
node.insert(20);

// console.log(tree);
console.log(tree.dfsPost2())

// console.log(node.contains(102))





module.exports = Node;
