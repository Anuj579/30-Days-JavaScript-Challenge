// Activity 3: Queue - task5 to task6

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element)
    }

    dequeue() {
        if (this.isEmpty()) {
            return 'Queue is Empty.'
        }
        return this.items.shift()
    }

    front() {
        if (this.isEmpty()) {
            return 'Queue is Empty.'
        }
        return this.items[0]
    }

    isEmpty() {
        return this.items.length === 0
    }
}

const queue = new Queue()
queue.enqueue(3)
queue.enqueue(5)
queue.enqueue(8)

console.log(queue.front());

queue.dequeue()
queue.dequeue()
queue.dequeue()
console.log(queue.front());
