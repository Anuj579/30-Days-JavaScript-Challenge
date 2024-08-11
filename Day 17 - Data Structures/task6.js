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

    processInOrder() {
        while (!this.isEmpty()) {
            console.log(this.dequeue());
        }
    }
}

const printer = new Queue()
printer.enqueue("Job 1")
printer.enqueue("Job 2")
printer.enqueue("Job 3")

printer.processInOrder()