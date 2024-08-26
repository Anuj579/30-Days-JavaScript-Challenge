// Activity 2: Character Classes and Quanitifiers - task3 to task4

let text = "Hello, I am Anuj Chaudhary. I live in India."
let pattern = /\b[A-Z][a-z]*/g
let matches = text.match(pattern)

console.log("Matches:", matches);