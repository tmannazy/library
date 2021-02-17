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

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read == 'yes' ? true : false
}
// Book.prototype = {
//     bookAdd() { myLibrary.push(this.title, this.author, this.pages, this.read) }
// };


function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = Number(document.getElementById('pages').value);
    let read = document.querySelector('input[name="readbook"]:checked').value;
    let bookObj = new Book(title, author, pages, read);
    myLibrary.push(bookObj);
    console.log(myLibrary);
};

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