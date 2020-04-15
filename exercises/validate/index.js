// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent
const Node = require('./node')
// function validate(node, min = null, max = null) {




//     if (node.left) {
//         let max = node.data;
//         if (node.left.data > max || (min!==null && node.left.data)) {

//             return false
//         }

//         else
//             return validate(node.left, null, max)
//     }
//     if (node.right) {
//         let min = node.data;
//         if (node.right.data < min || (max!=null && node.right.data>max)) {

//             return false
//         }

//         else
//             return validate(node.right, min, max)
//     } else return true

// }


function validate2(node, min = null, max = null) {

    if (node.left && (node.left.data > node.data || (min !== null && node.left.data < min) || !validate2(node.left, min, node.data))) {
        return false
    }


    if (node.right && (node.right.data < node.data || (max != null && node.right.data > max) || !validate2(node.right, node.data, max))) {
        return false
    }
    else return true

}









const n = new Node(10);
n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);
  n.left.left.right = new Node(999);
// console.log(n);
console.log(validate2(n));
module.exports = validate2;
