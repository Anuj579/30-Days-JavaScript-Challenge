// Activity 2: Class Inheritance - task3 to task4

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    updateAge(newAge) {
        this.age = newAge;
    }
}

class Student extends Person {
    constructor(id, name, age) {
        super(name, age);
        this.id = id;
    }
}

const s = new Student(1, "Anuj", 19)
console.log('Student ID:', s.id);