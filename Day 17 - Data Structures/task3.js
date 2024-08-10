// Activity 2: Stack - task3 to task4

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element)
    }

    pop() {
        if (this.items.length === 0) {
            return 'Stack is Empty.';
        }
        return this.items.pop()
    }

    peek() {
        if (this.items.length === 0) {
            return 'Stack is Empty.';
        }
        return this.items[this.items.length - 1]
    }
}

const stack = new Stack()

stack.push(5)
stack.push(3)
stack.push(12)

console.log(`Top element: ${stack.peek()}`);
console.log(`Element removed: ${stack.pop()}`);
console.log(`Element removed: ${stack.pop()}`);
console.log(`Element removed: ${stack.pop()}`);
console.log(`Element removed: ${stack.pop()}`);
 