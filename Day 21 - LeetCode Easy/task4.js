// Activity 4: Merge Two Sorted Lists
// Task 4 - Write a function that takes two sorted linked lists and returns a new sorted list by merging them. Create few test cases with linked lists and log the merged test.

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(value) {
        const newNode = new ListNode(value)
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
    }

    display() {
        let current = this.head;
        let result = ''
        while (current) {
            result += current.value + ' -> '
            current = current.next
        }
        console.log(result + 'null');
    }
}

function mergeTwoSortedLists(list1, list2){
    let dummy = new ListNode()
    let current = dummy

    let l1 = list1.head
    let l2 = list2.head

    while(l1 && l2){
        if (l1.value < l2.value){
            current.next = l1
            l1 = l1.next
        } else {
            current.next = l2
            l2 = l2.next
        }
        current = current.next
    }

    current.next = l1 || l2

    const mergedList = new LinkedList();
    mergedList.head = dummy.next; 

    return mergedList;
}

const list1 = new LinkedList()
list1.addNode(2)
list1.addNode(4)
list1.addNode(6)

console.log("List 1: ");
list1.display()

const list2 = new LinkedList()
list2.addNode(1)
list2.addNode(3)
list2.addNode(5)

console.log("List 2: ");
list2.display()

const mergeList = mergeTwoSortedLists(list1, list2);
console.log(`Merge List: `);
mergeList.display()