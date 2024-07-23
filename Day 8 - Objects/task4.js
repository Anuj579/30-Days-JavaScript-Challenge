const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,

    updateYear: function (year) {
        this.year = year;
    }
}

book.updateYear(2024);
console.log(book);
