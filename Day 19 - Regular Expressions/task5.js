// Activity 3: Grouping and Capturing - task5 to task6

let phoneNumber = "(123) 456-7890";
let pattern = /\((\d{3})\) (\d{3})-(\d{4})/;
let matches = phoneNumber.match(pattern);

console.log("Area Code:", matches[1]);
console.log("Central Office Code:", matches[2]);
console.log("Line Number:", matches[3]);