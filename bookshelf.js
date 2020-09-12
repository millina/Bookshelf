let bookNameInput = document.querySelector("#book-name");
let authorNameInput = document.querySelector("#author-name");
let addButton = document.querySelector("#add-book");
let bookshelf = document.querySelector("#bookshelf");
let books = [];
let modal = document.querySelector("#modalwndw");
let modalbutton = document.querySelector("#modalbutton");
let span = document.querySelector(".close");


let savedBooks = localStorage.getItem("books");

if(savedBooks) {
    books = JSON.parse(savedBooks);
    for(let b of books) {
        let bookHTML = createBook(b);
        bookshelf.appendChild(bookHTML);
    }
}

modalbutton.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function addBook() {
    let newBook = {
        title: bookNameInput.value,
        author: authorNameInput.value,
    };
    books.push(newBook);
    localStorage.setItem("books", JSON.stringify(books));
    bookshelf.innerHTML = "";
    for(let b of books) {
        let bookHTML = createBook(b);
        bookshelf.appendChild(bookHTML);
    }

    document.getElementById("book-name").value = "";
    document.getElementById("author-name").value = "";
    modal.style.display = "none";
}

function createBook(book) {
    let bookDiv = document.createElement("div");
    bookDiv.className = "book";

    let bookTitle = document.createElement("h1");
    bookTitle.className = "book-title";
    bookTitle.innerHTML = book.title;

    let bookAuthor = document.createElement("p");
    bookAuthor.className = "book-author";
    bookAuthor.innerHTML = book.author;

    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);

    return bookDiv;
}

addButton.onclick = addBook;
/*bookNameInput.addEventListener("keyup", function(enter) {
    if(enter.keyCode === 13) {
        addBook();
        enter.preventDefault();
    }
}); */