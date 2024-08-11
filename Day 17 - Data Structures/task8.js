class Node {
    constructor(value, left = null, right = null) {
        this.value = value
        this.left = left
        this.right = right
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root
    }
    
    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    inOrderTraversal(node = this.root) {
        if (node !== null) {
            this.inOrderTraversal(node.left); 
            console.log(node.value);          
            this.inOrderTraversal(node.right);
        }
    }
}

const tree = new BinaryTree();
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(20);
tree.insert(40);
tree.insert(60);
tree.insert(80);

console.log("In-Order Traversal of the Tree:");
tree.inOrderTraversal();
