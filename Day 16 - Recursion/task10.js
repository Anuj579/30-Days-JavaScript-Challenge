// Define the structure of a TreeNode
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function calculateDepth(node) {
    if (node === null) return 0;

    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);

    return Math.max(leftDepth, rightDepth) + 1;
}

// Tree 1: (Depth 3)
//      4
//     / \
//    2   5
//   / \
//  1   3

const root1 = new TreeNode(4);
root1.left = new TreeNode(2);
root1.right = new TreeNode(5);
root1.left.left = new TreeNode(1);
root1.left.right = new TreeNode(3);

// Tree 2: (Depth 4)
//      1
//       \
//        2
//         \
//          3
//           \
//            4

const root2 = new TreeNode(1);
root2.right = new TreeNode(2);
root2.right.right = new TreeNode(3);
root2.right.right.right = new TreeNode(4);

// Tree 3: (Depth 1)
//      1

const root3 = new TreeNode(1);

// Tree 4: (Depth 0)
const root4 = null;

// Test cases
console.log(calculateDepth(root1)); // Output: 3
console.log(calculateDepth(root2)); // Output: 4
console.log(calculateDepth(root3)); // Output: 1
console.log(calculateDepth(root4)); // Output: 0
