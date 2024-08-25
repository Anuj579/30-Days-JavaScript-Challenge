let email = "example@gmail.com";
let pattern = /([^@]+)@([^@]+\.[^@]+)/;
let matches = email.match(pattern);

console.log("Username:", matches[1]);
console.log("Domain:", matches[2]);