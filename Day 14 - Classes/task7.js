// Activity 4: Getters and Setters - task7 to task8

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return this.firstName + " " + this.lastName
    }
}

const p = new Person("Anuj", "Chaudhary")
console.log("Full Name:", p.fullName); 