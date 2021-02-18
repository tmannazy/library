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

function addBookToLibrary(e) {
    e.preventDefault();
    title = document.getElementById('title').value;
    author = document.getElementById('author').value;
    pages = Number(document.getElementById('pages').value);
    read = document.querySelector('input[name="readbook"]:checked').value;

    let bookObj = new Book(title, author, pages, read);
    myLibrary.push(bookObj);
    displayLibrary();
};

let button = document.querySelector('button');
button.addEventListener('click', addBookToLibrary);


// This function loops through the array
// to display the books in a table format or card.

const displayLibrary = () => {
    let table = document.querySelector('.book-table')
    let tableStructure = document.createElement('table');
    let tableCaption = document.createElement('caption');
    let tableBody = document.createElement('tbody');
    let tableHead = document.createElement('thead');
    let tableRow = document.createElement('tr');
    let tableHeader = document.createElement('th');
    libraryBooks = myLibrary.forEach(element => {
        for (let prop in element) {
            for (i = 0; i < myLibrary.length; i++) {
                tableCaption.textContent = 'YOUR BOOK DATA';
                tableHead.appendChild(tableRow);
                tableRow.appendChild(tableHeader);
                tableHeader.textContent = `${prop} `;
                let tableData = document.createElement('td');
                for (j = 0; j < myLibrary.length; j++) {
                    tableData.textContent = `${element[prop][i]}`
                    tableRow.appendChild(tableData);
                }
                tableBody.appendChild(tableRow);
            }
            tableStructure.appendChild(tableCaption);
            tableStructure.appendChild(tableHead);
            tableStructure.appendChild(tableBody);
            table.appendChild(tableStructure);
        }
    });
}
// Button to click and add NEW BOOK in a FORM format
// with details for the book; Author, Title, Number of Pages, Read or not


// Create remove button on each book display in the library.


// Create button on each book to change the read status.
// A isRead() on the Book prototype instance
