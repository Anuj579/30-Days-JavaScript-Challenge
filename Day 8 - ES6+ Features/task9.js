const key1 = "firstName";
const key2 = "lastName";
const key3 = "age";

const person = {
  [key1]: "Anuj",
  [key2]: "Chaudhary",
  [key3]: 19,
  [`fullName`]() {
    return `${this[key1]} ${this[key2]}`;
  }
};

console.log(person);

console.log(`First Name: ${person[key1]}`);
console.log(`Last Name: ${person[key2]}`);
console.log(`Age: ${person[key3]}`);
console.log(`Full Name: ${person.fullName()}`);
