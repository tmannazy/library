// let myLibrary = [
// {
//     title: 'Think & Grow Rich',
//     author: 'Napoleon Hill',
//     pages: 260,
//     read: true
// },
// {
//     title: 'Purpose Driven Life',
//     author: 'Rick Warrens',
//     pages: 500,
//     read: true
// }, {
//     title: 'The Alchemist',
//     author: 'Paulo Coelho', pages: 208,
//     read: true
// }, {
//     title: 'Richest Man in Babylon',
//     author: 'George Samuel Clason',
//     pages: 144,
//     read: true
// },
// {
//     title: 'Progit',
//     author: 'Ben Straub & Scott Chacon',
//     pages: 513,
//     read: false
// },
// {
//     title: 'Grit The Power of Passion and Perseverance',
//     author: 'Angela Duckworth',
//     pages: 513,
//     read: false
// },
// {
//     title: '56 Win Streak',
//     author: 'Joe DiMaggio',
//     pages: 30,
//     read: true
// },
// {
//     title: 'Code Daily',
//     author: 'Madison Kanna',
//     pages: 25,
//     read: true
// },
// {
//     title: 'Eloquent JavaScript',
//     author: 'Marijn Haverbeke',
//     pages: 388,
//     read: false
// },
// {
//     title: 'YDKJS',
//     author: 'Kyle Simpson',
//     pages: 300,
//     read: false
// }
// ];
let myLibrary = [];

function Book() {
    this.title = '';
    this.author = '';
    this.pages = '';
    if (this.read == 'yes')
        return true;
    else
        return false;
}
Book.prototype = {
    bookAdd() { myLibrary.push(this.title, this.author, this.pages, this.read) }
};

let bookObj = new Book();

function addBookToLibrary() {
    bookObj.title = bookData.title.value;
    bookObj.author = bookData.author.value;
    bookObj.pages = Number(bookData.pages.value);
    bookObj.read = bookData.readbook.value;
    bookObj.bookAdd();
}

// addBookToLibrary();
let button = document.querySelector('button');
button.addEventListener('click', addBookToLibrary());


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

// console.log(myLibrary);