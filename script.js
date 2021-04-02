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

function Book(title, author, pages, read, comment) {
    this.timeCreated = timeCreated
    this.title = title
    this.author = author
    this.pages = pages
    // this.read = status()
    this.read = read == 'yes' ? true : false
    this.comment = comment
};

const addBookToLibrary = e => {
    e.preventDefault();
    const timeCreated = new Date().getMilliseconds();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = Number(document.getElementById('pages').value);
    const read = document.querySelector('input[name="readbook"]:checked').value;
    const comment = document.querySelector('textarea').value;

    let bookObj = new Book(title, author, pages, read, comment);
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
    const generateTableFromObject = (obj, index) => {
        const tableRowBody = document.createElement('tr');
        const delBtn = document.createElement('button');
        const toggleButtonLabel = document.createElement('label');
        const toggleButtonInput = document.createElement('input');
        const toggleButtonSpan = document.createElement('span');

        tableRowBody.dataset.bookId = `${Object.values(obj)[0]}`;
        delBtn.textContent = 'X';
        delBtn.className = 'delete-book';
        toggleButtonLabel.className = 'switch';
        toggleButtonInput.setAttribute('type', 'checkbox');
        toggleButtonSpan.className = 'slider';

        for (let prop in obj) {
            const tableData = document.createElement('td');
            if (prop === 'id') {
                tableData.textContent = index;
            } else {
                tableData.textContent = `${obj[prop]}`;
            }
            tableRowBody.appendChild(tableData);

        }
        toggleButtonLabel.appendChild(input);
        toggleButtonLabel.appendChild(span);
        tableRowBody.appendChild(delBtn);
        tableRowBody.appendChild(label);
        tableBody.appendChild(tableRowBody);
    }
    while (tableBody.firstChild) {
        tableBody.firstChild.remove();
    }

    const toggledBtn = document.querySelectorAll('input[type="checkbox"]');
    if (toggledBtn) {

    }
    const libraryBooks = myLibrary.forEach(generateTableFromObject);
    bookToDelete();
};

// Create remove button on each book display in the library.
const bookToDelete = () => {
    const delBook = document.querySelectorAll('.delete-book');
    const btnsArr = Array.from(delBook);

    const removeBook = event => {
        const rowToRemove = event.target.closest('tr');
        const tableBookId = Number(rowToRemove.dataset.bookId);
        myLibrary.forEach((item, index) => {
            if (tableBookId === item.id) {
                myLibrary.splice(index, 1);
                tableBody.deleteRow(index);
            }
        });
    };
    btnsArr.map(item => item.addEventListener('click', removeBook));
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
        openButton.textContent = 'Click To Close Form';
    }
    else {
        formStatus.style.display = 'none';
        openButton.textContent = 'Enter Book Details';
    }
};

// Removes delay on button click to display form
setTimeout(toggleForm, 0);
openButton.addEventListener('click', toggleForm);


// Create button on each book to change the read status.
// A isRead() on the Book prototype instance

// Book.prototype.bookReadStatus = function () {
//     const checkStatus = document.querySelector("label");
//     if (checkStatus === 'yes') {
//         label.className = 'switch';

//     }
// }
// console.log(myLibrary);