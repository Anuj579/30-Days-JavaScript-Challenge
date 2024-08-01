class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    updateAge(newAge) {
        this.age = newAge;
    }
}

const p = new Person('Anuj', 19)
console.log(p);
p.updateAge(21)
console.log(p);