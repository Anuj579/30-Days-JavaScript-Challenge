// Activity 1: Linked List - task1 to task2

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const node1 = new Node(10);
const node2 = new Node(20);
node1.next = node2;

const node3 = new Node(30);

node2.next = node3;

console.log(node1);
console.log(node1.next);
console.log(node2.next); 