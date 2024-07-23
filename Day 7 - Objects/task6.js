const library = {
    name: "Ace Library",
    books: {
        book: ["How come on one told me that?", "Hello World!", "Rich Dad - Poor Dad!"]
    }
}

console.log(`Name of library: ${library.name}`);

library.books.book.forEach((title, index) => {
    console.log(`Book ${index + 1}: ${title}`);
});
