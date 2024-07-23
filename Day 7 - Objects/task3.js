// Activity 2: Object Methods - task3 to task4

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,

    method: function () {
        return `Title: ${this.title}, Author: ${this.author}`
    }
}

console.log(book.method());

