// let myLibrary = [
//     {
//         title: 'Think & Grow Rich',
//         author: 'Napoleon Hill',
//         pages: 260,
//         read: true
//     },
//     {
//         title: 'Purpose Driven Life',
//         author: 'Rick Warrens',
//         pages: 500,
//         read: true
//     }, {
//         title: 'The Alchemist',
//         author: 'Paulo Coelho', pages: 208,
//         read: true
//     }, {
//         title: 'Richest Man in Babylon',
//         author: 'George Samuel Clason',
//         pages: 144,
//         read: true
//     },
//     {
//         title: 'Progit',
//         author: 'Ben Straub & Scott Chacon',
//         pages: 513,
//         read: false
//     },
//     {
//         title: 'Grit The Power of Passion and Perseverance',
//         author: 'Angela Duckworth',
//         pages: 513,
//         read: false
//     },
//     {
//         title: '56 Win Streak',
//         author: 'Joe DiMaggio',
//         pages: 30,
//         read: true
//     },
//     {
//         title: 'Code Daily',
//         author: 'Madison Kanna',
//         pages: 25,
//         read: true
//     },
//     {
//         title: 'Eloquent JavaScript',
//         author: 'Marijn Haverbeke',
//         pages: 388,
//         read: false
//     },
//     {
//         title: 'YDKJS',
//         author: 'Kyle Simpson',
//         pages: 300,
//         read: false
//     }
// ];
let myLibrary = [];

let count = 0;
function Book(id, title, author, pages, read, comment) {
    this.id = count
    this.title = title
    this.author = author
    this.pages = pages
    // this.read = status()
    this.read = read == 'yes' ? true : false
    this.comment = comment
}

const addBookToLibrary = e => {
    e.preventDefault();
    id = count++
    title = document.getElementById('title').value;
    author = document.getElementById('author').value;
    pages = Number(document.getElementById('pages').value);
    read = document.querySelector('input[name="readbook"]:checked').value;
    comment = document.querySelector('textarea').value;

    let bookObj = new Book(id, title, author, pages, read, comment);
    myLibrary.push(bookObj);
    displayLibrary();
};

let button = document.querySelector('#submit');
button.addEventListener('click', addBookToLibrary);


// This function loops through the array
// to display the books in a table format or card.
const table = document.querySelector('.book-table')
const tableBody = document.querySelector('tbody');

const displayLibrary = () => {
    const generateTableFromObject = obj => {
        const tableRowBody = document.createElement('tr');
        const delBtn = document.createElement('button');
        delBtn.textContent = 'X';
        delBtn.className = 'delete-book';
        for (let prop in obj) {
            const tableData = document.createElement('td');
            tableData.textContent = `${obj[prop]}`;
            tableData.setAttribute('data-book-id', '')
            tableRowBody.appendChild(tableData);
        }
        // tableData.dataset.bookId = myLibrary[obj];
        tableRowBody.appendChild(delBtn);
        tableBody.appendChild(tableRowBody);
    }
    while (tableBody.firstChild) {
        tableBody.firstChild.remove();
    }
    const libraryBooks = myLibrary.forEach(generateTableFromObject);

    // Create remove button on each book display in the library.
    const delBook = document.querySelector('.delete-book')
    const removeBook = () => {
        myLibrary.forEach(item => {
            item.pop();
        })
    }
    delBook.addEventListener('click', removeBook);
};

// Button to click and add NEW BOOK in a FORM format
// with details for the book; Author, Title, Number of Pages, Read or not
let formStatus = document.querySelector('.book-info');
let openButton = document.querySelector('.toggle-form');

const showForm = () => {
    document.querySelector('.book-info').style.display = 'block';
};

const toggleForm = () => {
    if (formStatus.style.display === 'none') {
        formStatus.style.display = 'block';
        openButton.textContent = 'Click to Close Form';
    }
    else {
        formStatus.style.display = 'none';
        openButton.textContent = 'Enter Book Details';
    }
};

// Removes delay on button click to display form
setTimeout(toggleForm, 0);
openButton.addEventListener('click', toggleForm);


// Book.prototype.deleteBook = function (obj) {
//     let delBtn = document.createElement('button');
//     delBtn.id = 'deleteBtn';
//     delBtn.class = 'delete-btn';
    // delBtn.addEventListener ? delBtn.addEventListener('click',)
// }

// Create button on each book to change the read status.
// A isRead() on the Book prototype instance
// Book.prototype.status = function () {

// }
// console.log(myLibrary);