// Activity 4: Binary Tree - task7 to task8

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value
        this.left = left
        this.right = right
    }
}

const TreeNodeOne = new TreeNode(2);
const TreeNodeTwo = new TreeNode(3);
const TreeNodeThree = new TreeNode(4);

TreeNodeOne.right = TreeNodeTwo
TreeNodeOne.left = TreeNodeThree

console.log(TreeNodeOne)
