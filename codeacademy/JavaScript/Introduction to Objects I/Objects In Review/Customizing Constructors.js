// 3 lines required to make harry_potter
var harry_potter = new Object();
harry_potter.pages = 350;
harry_potter.author = "J.K. Rowling";

// A constructor
function Book (pages, author) {
    this.pages = pages;
    this.author = author;
}

// Creating object needs only 1 line if constructor is used
var the_hobbit = new Book(320, "J.R.R. Tolkien");

console.log(the_hobbit);