// let myLibrary = [
//     {
//         title: 'Think & Grow Rich',
//         author: 'Napoleon Hill',
//         pages: 260,
//         read: 'Yes'
//     },
//     {
//         title: 'Purpose Driven Life',
//         author: 'Rick Warrens',
//         pages: 500,
//         read: 'Yes'
//     }, {
//         title: 'The Alchemist',
//         author: 'Paulo Coelho', pages: 208,
//         read: 'Yes'
//     }, {
//         title: 'Richest Man in Babylon',
//         author: 'George Samuel Clason',
//         pages: 144,
//         read: 'Yes'
//     },
//     {
//         title: 'Progit',
//         author: 'Ben Straub & Scott Chacon',
//         pages: 513,
//         read: 'No'
//     },
//     {
//         title: 'Grit The Power of Passion and Perseverance',
//         author: 'Angela Duckworth',
//         pages: 513,
//         read: 'No'
//     },
//     {
//         title: '56 Win Streak',
//         author: 'Joe DiMaggio',
//         pages: 30,
//         read: 'Yes'
//     },
//     {
//         title: 'Code Daily',
//         author: 'Madison Kanna',
//         pages: 25,
//         read: 'Yes'
//     },
//     {
//         title: 'Eloquent JavaScript',
//         author: 'Marijn Haverbeke',
//         pages: 388,
//         read: 'No'
//     },
//     {
//         title: 'YDKJS',
//         author: 'Kyle Simpson',
//         pages: 300,
//         read: 'No'
//     }
// ];
let myLibrary = [{
    title: 'YDKJS',
    author: 'Kyle Simpson',
    pages: 300,
    read: 'Yes',
    comment: 'After reading this book you will affirm you don\'t know JS truly.'
}];

function Book(id, title, author, pages, read, comment) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read == 'yes' ? 'Yes' : 'No';
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
const bookDisplay = document.querySelector('.book-display')

const displayLibrary = () => {
    const generateTableFromObject = (obj, index) => {
        const bookDiv = document.createElement('div');
        const delBtn = document.createElement('button');
        const toggleButtonLabel = document.createElement('label');
        const toggleButtonInput = document.createElement('input');
        const toggleButtonSpan = document.createElement('span');

        bookDiv.dataset.bookId = `${Object.values(obj)[0]}`
        bookDiv.className = 'book-series';
        delBtn.textContent = 'X';
        delBtn.className = 'delete-book';
        toggleButtonLabel.className = 'switch';
        toggleButtonInput.setAttribute('type', 'checkbox');
        toggleButtonInput.setAttribute('name', 'toggle');
        toggleButtonSpan.className = 'slider';

        for (let prop in obj) {
            const bookDivData = document.createElement('div');
            switch (prop) {
                case 'id':
                    continue;
                case 'title':
                    bookDivData.textContent = `Title: ${obj[prop]}`;
                    bookDivData.className = 'title';
                    break;
                case 'author':
                    bookDivData.textContent = `Author: ${obj[prop]}`;
                    bookDivData.className = 'author';
                    break;
                case 'pages':
                    bookDivData.textContent = `Pages: ${obj[prop]}`;
                    bookDivData.className = 'pages';
                    break;
                case 'read':
                    bookDivData.textContent = `Read: ${obj[prop]}`;
                    if (`${obj[prop]}` === 'Yes') {
                        toggleButtonSpan.style.backgroundColor = '#5A18CD';
                    } else {
                        toggleButtonSpan.style.backgroundColor = '#EF0717';
                    }
                    bookDivData.className = 'read';
                    break;
                case 'comment':
                    bookDivData.textContent = `${obj[prop]}`;
                    bookDivData.className = 'comment';
                    break;
                default:
                    break;
            }
            bookDiv.appendChild(bookDivData);
        }
        toggleButtonLabel.appendChild(toggleButtonInput);
        toggleButtonLabel.appendChild(toggleButtonSpan);
        bookDiv.appendChild(delBtn);
        bookDiv.appendChild(toggleButtonLabel);
        bookDisplay.appendChild(bookDiv);
    }
    while (bookDisplay.firstChild) {
        bookDisplay.firstChild.remove();
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
        const divToRemove = event.target.closest('div');
        const divBookId = Number(divToRemove.dataset.bookId);
        myLibrary.forEach((item, index) => {
            if (divBookId === item.id) {
                myLibrary.splice(index, 1);
                divToRemove.remove();
            }
        });
    };
    btnsArr.map(item => item.addEventListener('click', removeBook));
};

// Button to click and add NEW BOOK in a FORM format
// with details for the book; Author, Title, Number of Pages, Read or not
const formStatus = document.querySelector('.book-info');
const openButton = document.querySelector('.toggle-form');
const closeForm = document.querySelectorAll('.book-info button');

closeForm.forEach(item => {
    item.addEventListener('click', () => {
        formStatus.style.display = 'none';
    });
});

const toggleForm = () => {
    if (formStatus.style.display === 'none') {
        formStatus.style.display = 'block';
    }
    else {
        formStatus.style.display = 'none';
        openButton.textContent = 'Add Book';
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
            const divToChangeIndex = evt.target.closest('div');
            const divToChange = Array.from(divToChangeIndex.parentElement.children).indexOf(divToChangeIndex);
            myLibrary.forEach((book, index) => {
                let cellChange;
                let changeBtnColor = Array.from(document.querySelectorAll('.slider'));
                if (index === divToChange) {
                    if (book['read'] == 'No') {
                        book['read'] = 'Yes';
                        cellChange = Array.from(divToChangeIndex.children)[3];
                        cellChange.textContent = 'Read: Yes';
                        changeBtnColor.forEach(item => item.classList.toggle('true-color')
                        );
                    }
                    else {
                        book['read'] = 'No';
                        cellChange = Array.from(divToChangeIndex.children)[3];
                        cellChange.textContent = 'Read: No';
                        changeBtnColor.forEach(changeColor => changeColor.classList.toggle('false-color'));
                    }
                }
            });
        });
    });
};

// Save user input to localStorage
const saveArrData = () => {
    localStorage.setItem('myLibraryData', JSON.stringify(myLibrary));
}

// Confirm if array exists in localStorage
const isArrData = () => {
    if (!localStorage.myLibraryData) {
        displayLibrary();
    } else {
        let retrieveSavedArr = localStorage.getItem('myLibraryData');
        retrieveSavedArr = JSON.parse(retrieveSavedArr);
        myLibrary = retrieveSavedArr;
        displayLibrary();
    }
}
isArrData();
