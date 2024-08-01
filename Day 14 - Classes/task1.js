// Activity 1:  Class Definition - task1 to task2

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello ${this.name}. Your age is ${this.age}.`);
    }
}

const p = new Person('Anuj', 19)
p.greet()