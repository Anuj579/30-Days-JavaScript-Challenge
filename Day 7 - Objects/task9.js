const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
}

const keys = Object.keys(book)
const values = Object.values(book)

console.log("Keys:");
keys.forEach(key => console.log(key))

console.log("\nValues:");
values.forEach(value => console.log(value))