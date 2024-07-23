// Activity 5: Object Iteration - task8 to task9

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
}

for (let x in book) {
    console.log(`${x} - ${book[x]}`);
}
