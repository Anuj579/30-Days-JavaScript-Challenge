let text = "Hello, 123 mic testing. 1 is one, 12 twelve."
let pattern = /\d+/g
let matches = text.match(pattern)

console.log("Matches:", matches);
