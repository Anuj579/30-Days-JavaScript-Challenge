class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello ${this.name}. Your age is ${this.age}.`);
    }
}

class Student extends Person {
    constructor(id, name, age) {
        super(name, age);
        this.id = id;
    }
    greet() {
        console.log(`Hello, ${this.name}. Your ID is ${this.id}. Your age is ${this.age}`);
    }
}

const s = new Student(1, "Anuj", 19)
s.greet()
