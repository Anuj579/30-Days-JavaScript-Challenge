// Activity 1: Add Two Numbers
// Task 1 - Solve the "Add Two Numbers" problem on LeetCode.
// Write a function that takes two non-empty linked list representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list. Create a few test cases with linked lists and log the sum as a linked list

class ListNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    addNode(value) {
        const newNode = new ListNode(value)
        if (this.head === null) {
            this.head = newNode
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
    }

    display() {
        let current = this.head
        let result = ''
        while (current) {
            result += current.value + ' -> '
            current = current.next
        }
        console.log(result + 'null');
    }
}

function addTwoNumbers(list1, list2) {
    let dummy = new ListNode();
    let current = dummy;
    let carry = 0;

    let l1 = list1.head;
    let l2 = list2.head;

    while (l1 !== null || l2 !== null) {
        let x = l1 !== null ? l1.value : 0;
        let y = l2 !== null ? l2.value : 0;

        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    const addedList = new LinkedList();
    addedList.head = dummy.next;

    return addedList;
}

const list1 = new LinkedList()
list1.addNode(3)
list1.addNode(5)
list1.addNode(9)

const list2 = new LinkedList()
list2.addNode(8)
list2.addNode(6)
list2.addNode(7)

console.log('List 1:');
list1.display()
console.log('List 2:');
list2.display()

const addedList = addTwoNumbers(list1, list2)
console.log('Added List:');
addedList.display()