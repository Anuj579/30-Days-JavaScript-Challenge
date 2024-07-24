// Activity 5: Enhanced Objects Literals - task8 to task9

const name = "Anuj";
const age = 19;

const person = {
  name,
  age,
  
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  },

  ['isAdult']() {
    return this.age >= 18;
  }
};

console.log(person);

person.greet();
console.log(`Is adult: ${person.isAdult()}`);
