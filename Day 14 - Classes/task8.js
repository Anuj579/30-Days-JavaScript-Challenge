class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set fname(fname) {
        this.firstName = fname;
    }

    set lname(lname) {
        this.lastName = lname;
    }

    get fullName() {
        return this.firstName + " " + this.lastName
    }


}

const p = new Person("Anuj", "Chaudhary")
console.log("Full Name:", p.fullName);

p.firstName = "Hitesh"
p.lastName = "Choudhary"
console.log("Updated Full Name:", p.fullName);