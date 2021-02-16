let myLibrary = [{
    title: 'Think & Grow Rich',
    author: 'Napoleon Hill',
    pages: 260,
    read: true
},
{
    title: 'Purpose Driven Life',
    author: 'Rick Warrens',
    pages: 500,
    read: true
}, {
    title: 'The Alchemist',
    author: 'Paulo Coelho', pages: 208,
    read: true
}, {
    title: 'Richest Man in Babylon',
    author: 'George Samuel Clason',
    pages: 144,
    read: true
}, {
    title: 'Progit',
    author: 'Ben Straub & Scott Chacon',
    pages: 513,
    read: false
}, {
    title: 'Grit The Power of Passion and Perseverance',
    author: 'Angela Duckworth',
    pages: 513,
    read: false
}, {
    title: '56 Win Streak',
    author: 'Joe DiMaggio',
    pages: 30,
    read: true
}, {
    title: 'Code Daily',
    author: 'Madison Kanna',
    pages: 25,
    read: true
}, {
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke',
    pages: 388,
    read: false
},
{ title: 'YDKJS', author: 'Kyle Simpson', pages: 300, read: false }
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}
Book.prototype = {
    read() {
        this.read == 'yes' ? true : false;
    },
    bookAdd() { myLibrary.push(this.title, this.author, this.pages, this.read) }
};


function addBookToLibrary() {
    let bookTitle = document.getElementById('title').value;
    let bookAuthor = document.getElementById('author').value;
    let bookPages = document.getElementById('pages').value;
    let haveReadBook = document.querySelector('input[name="readbook"]:checked').value;

    let book1 = new Book(bookTitle, bookAuthor, bookPages, haveReadBook);
}

addBookToLibrary();


//  This function loops through the array to display the books in a table format or card.
const displayLibrary = () => {
    // myLibrary.map(())
    let table = document.createElement('div');

}

// Button to click and add NEW BOOK in a FORM format
// with details for the book; Author, Title, Number of Pages, Read or not


// Create remove button on each book display in the library.


// Create button on each book to change the read status.
// A isRead() on the Book prototype instance

console.log(myLibrary);