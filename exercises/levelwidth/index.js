// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]


const Node = require('./node')

function levelWidth(root) {


    let results = [0];
    let all=[]
    let arr = [root];
    arr.push('s')

    while (arr.length > 1) {

        let node = arr.shift();
        
        if (node === 's') {
            results.push(0);
            arr.push('s')
        } else {
            all.push(node.data)
            arr.push(...node.children);
            results[results.length - 1] += 1;
        }


    }


    console.log(results)
    console.log(all)

}



const root = new Node(0);
root.add(1);
root.children[0].add(2);
root.children[0].add(3);
root.children[0].children[0].add(4);

console.log(root);
levelWidth(root)
module.exports = levelWidth;
