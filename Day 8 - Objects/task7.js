// Activity 4: The 'this' Keyword - task7

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,

    method: function () {
        return `Title: ${book.title}, Year: ${book.year}`
    }
}

console.log(book.method());
