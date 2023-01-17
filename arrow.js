export const author = {
    fullName: "Bob Alice",
    books: ["Harry Potter 1", "Harry Potter 2"],
    printBooks() {
        this.books.forEach(book => console.log(book + ' by ' +
            this.fullName));
    }

 }