export const author = {
    fullName: "Bob Alice",
    books: [],
    printBooks() {
        this.books.forEach(book => console.log(book + 'by ' +
            this.fullName));
    }
 };