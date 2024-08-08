// Activity 5: Tree Traversal - task9 to task10

class Node{
    constructor(value, left= null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function inOrderTraversal(node){
    if (node === null) return;
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
}

//     4
//    / \
//   2   5
//  / \
// 1   3 

const root = new Node(4);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(1);
root.left.right = new Node(3);

inOrderTraversal(root)
