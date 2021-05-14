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

function Book(num, title, author, pages, read, comment) {
    this.num = num;
    this.title = title;
    this.author = author;
    this.pages = pages;
    // this.read = status()
    this.read = read == 'yes' ? true : false;
    this.comment = comment;
};

const addBookToLibrary = e => {
    e.preventDefault();
    const num = new Date().getMilliseconds();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = Number(document.getElementById('pages').value);
    const read = document.querySelector('input[name="readbook"]:checked').value;
    const comment = document.querySelector('textarea').value;

    let bookObj = new Book(num, title, author, pages, read, comment);
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

        tableRowBody.dataset.bookNum = `${Object.values(obj)[0]}`;
        delBtn.textContent = 'X';
        delBtn.className = 'delete-book';
        toggleButtonLabel.className = 'switch';
        toggleButtonInput.setAttribute('type', 'checkbox');
        toggleButtonInput.setAttribute('name', 'toggle');
        toggleButtonSpan.className = 'slider';

        for (let prop in obj) {
            const tableData = document.createElement('td');
            if (prop === 'id') {
                tableData.textContent = index;
            } else {
                tableData.textContent = `${obj[prop]}`;
            }
            // let tableData;
            // let keys = Object.keys(obj);
            // for (let key of keys) {
            //     tableData = document.createElement('td');
            //     tableData.textContent = `${Object.values(keys)}`;
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
};

// Create remove button on each book display in the library.
const bookToDelete = () => {
    const delBook = document.querySelectorAll('.delete-book');
    const btnsArr = Array.from(delBook);

    const removeBook = event => {
        const rowToRemove = event.target.closest('tr');
        const tableBookNum = Number(rowToRemove.dataset.bookNum);
        myLibrary.forEach((item, index) => {
            if (tableBookNum === item.num) {
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

// const toggledBtn = document.querySelectorAll('input[type="checkbox"]');
// const toggledBtn = document.querySelectorAll('.slider');
const toggledBtn = document.querySelectorAll('input[type=checkbox][name=toggle]');
// let toggledBtnArr = [];

// const changeStatus = evt => {
toggledBtn.forEach(item => {
    item.addEventListener('change', () => {
        // const toggledBtnArr = Array.from(toggledBtn)
        myLibrary.forEach((book, index) => {
            let cellChange;
            if (tableBody.row[index] && book['read'] == false) {
                book['read'] = true;
                cellChange = tableBody.row[index].cells;
                cellChange[4].textContent = 'true';
            }
            else {
                book['read'] = false;
                cellChange = tableBody.row[index].cells;
                cellChange[4].textContent = 'false';
            }
            return cellChange;
        });




        //     item
        //         .filter(e => e.checked)
        //         .map(checked => {
        //             // if (rowBookNum === rowBookNum) {
        //             if (checked == false) {
        //                 e['read'] = true;
        //                 e.read.textContent = 'true';
        //             } else if (checked == true) {
        //                 e['read'] = false;
        //                 e.read.textContent = 'false';
        //             }
        //             // }
        //         });
        //     // return toggledBtnArr;
    })
});
// toggledBtn.addEventListener('change', changeStatus);


// let checkbox = document.querySelector('input[name=toggle]');
// // let checkbx = Array.from(checkbox);

// checkbox.addEventListener('change', function () {
//     //   checkbx.forEach(item =>{
//     // item.addEventListener('change',go)});
//     // function go(e){
//     if (this.checked) {
//         console.log('Yay! Checkbox clicked.');
//     }
//     else {
//         console.log('Checkbox is unclicked.')
//     }
//     //   };
// });

var checkbox = document.querySelectorAll('input[name=toggle]');

// checkbox.addEventListener('change', function(){
checkbox.forEach(item => {
    item.addEventListener('change', go)
});
function go() {
    let checkbx = Array.from(checkbox);
    checkbx
        .filter(e => e.checked)
        .map(e => {
            if (e) {
                console.log('Yay! Checkbox clicked.');
            }
            else {
                console.log('Checkbox is unclicked.')
            }
        })
    //   console.log(checkbx)
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