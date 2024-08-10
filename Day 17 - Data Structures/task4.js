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

function reversedString(str) {
    let stack = new Stack();
    let reversedStr = ''

    for (let char of str) {
        stack.push(char);
    }

    while (stack.items.length !== 0) {
        reversedStr += stack.pop()
    }
    return reversedStr;
}

const originalStr = "hello"
const reversedStr = reversedString(originalStr);

console.log(`Orginal String: ${originalStr}`);
console.log(`Reversed String: ${reversedStr}`);
