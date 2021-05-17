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

function Book(id, title, author, pages, read, comment) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read == 'yes' ? true : false;
    this.comment = comment;
};

const addBookToLibrary = e => {
    e.preventDefault();
    const id = Number(new Date());
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = Number(document.getElementById('pages').value);
    const read = document.querySelector('input[name=readbook]:checked').value;
    const comment = document.querySelector('textarea').value;

    let bookObj = new Book(id, title, author, pages, read, comment);
    myLibrary.push(bookObj);
    saveArrData();
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

        tableRowBody.dataset.bookTitle = `${Object.values(obj)[0]}`;
        tableRowBody.dataset.bookPages = `${Object.values(obj)[2]}`;
        tableRowBody.dataset.bookId = Number(new Date());
        delBtn.textContent = 'X';
        delBtn.className = 'delete-book';
        toggleButtonLabel.className = 'switch';
        toggleButtonInput.setAttribute('type', 'checkbox');
        toggleButtonInput.setAttribute('name', 'toggle');
        toggleButtonSpan.className = 'slider';

        for (let prop in obj) {
            const tableData = document.createElement('td');
            // tableData.textContent = `${obj[prop]}`;
            // count = 0;
            if (prop === 'id') {
                // tableData.textContent = count;
                continue;
            } else {
                tableData.textContent = `${obj[prop]}`;
            }
            // let tableData;
            // let keys = Object.keys(obj);
            // for (let key of keys) {
            //     tableData = document.createElement('td');
            //     // tableData.textContent = `${Object.values(keys)}`;
            //     tableData.textContent = `${obj[key]}`;
            // }
            tableRowBody.appendChild(tableData);
        }
        toggleButtonLabel.appendChild(toggleButtonInput);
        toggleButtonLabel.appendChild(toggleButtonSpan);
        tableRowBody.appendChild(delBtn);
        tableRowBody.appendChild(toggleButtonLabel);
        tableBody.appendChild(tableRowBody);
    }
    while (tableBody.firstChild) {
        tableBody.firstChild.remove();
    }

    const libraryBooks = myLibrary.forEach(generateTableFromObject);
    bookToDelete();
    changeStatus();
};

// Create remove button on each book display in the library.
const bookToDelete = () => {
    const delBook = document.querySelectorAll('.delete-book');
    const btnsArr = Array.from(delBook);

    const removeBook = event => {
        const rowToRemove = event.target.closest('tr');
        const rowBookTitle = rowToRemove.dataset.bookTitle;
        const rowBookPages = Number(rowToRemove.dataset.bookPages);
        myLibrary.forEach((item, index) => {
            // if (rowBookTitle === item.title && rowBookPages === item.pages) {
            //     myLibrary.splice(index, 1);
            //     tableBody.deleteRow(index);
            // }
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

// Create button on each book to toggle its read status.
const changeStatus = () => {
    const toggledBtn = document.querySelectorAll('input[type=checkbox][name=toggle]');
    const toggledBtnArr = Array.from(toggledBtn);
    toggledBtnArr.forEach(item => {
        item.addEventListener('click', (evt) => {
            const rowToChange = evt.target.closest('tr').rowIndex;
            myLibrary.forEach((book, index) => {
                let cellChange;
                if (index + 1 === rowToChange) {
                    if (book['read'] == false) {
                        book['read'] = true;
                        cellChange = tableBody.rows[index].cells;
                        cellChange[3].textContent = 'true';
                        toggledBtn.classList.toggle('input:checked .slider');
                    }
                    else {
                        book['read'] = false;
                        cellChange = tableBody.rows[index].cells;
                        cellChange[3].textContent = 'false';
                    }
                    return cellChange;
                }
            });
        });
    });

};
// });

// Save user input to localStorage
const saveArrData = () => {
    localStorage.setItem('myLibraryData', JSON.stringify(myLibrary));
    let retrieveSavedArr = localStorage.getItem('myLibraryData');
    isArrData(retrieveSavedArr);
}

// Confirm if array exists in localStorage
const isArrData = arr => {
    let keys = Object.keys(localStorage);
    for (let key of keys) {
        if (localStorage.getItem(key) === arr) {
            continue;
        }
        else {
            localStorage.setItem(key, JSON.stringify(myLibrary));
        }
    }
}
// console.log(myLibrary);