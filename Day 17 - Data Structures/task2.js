class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        let newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next
            }
            current.next = newNode;
        }
    }

    removeNode() {
        if (this.head === null) {
            console.log('The list is empty, nothing to remove.');
            return;
        }
        if (this.head.next === null) {
            this.head = null;

            // find the second-last node and set its next to null
        } else {
            let current = this.head
            while (current.next.next !== null) {
                current = current.next
            }
            current.next = null
        }
    }

    display() {
        if (this.head === null) {
            console.log('The list is empty.');
            return;
        }
        let current = this.head
        let output = '';
        while (current !== null) {
            output += current.value + ' -> ';
            current = current.next
        }
        output += 'null'
        console.log(output);
    }
}

const list = new LinkedList()
list.add(5)
list.add(10)
list.add(15)

list.display()

list.removeNode()
list.display()

list.removeNode()
list.removeNode()
list.display()

list.removeNode()