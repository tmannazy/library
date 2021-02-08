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
    this.read = read;
}

let bookTitle = prompt('What is the name of the Book?');
let bookAuthor = prompt('What is the name of the Author?');
let bookPages = prompt('How many pages does the book have?');
let haveReadBook = prompt('Have you read the book?');

function addBookToLibrary() {
    myLibrary.push({ bookTitle, bookAuthor, bookPages, haveReadBook });
}

addBookToLibrary();
console.log(myLibrary[myLibrary.length - 1]);