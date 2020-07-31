let bookNameInput = document.querySelector("#book-name");
let addButton = document.querySelector("#add-book");
let bookshelf = document.querySelector("#bookshelf");
let books = [];
let modal = document.querySelector("#modalwndw");
let modalbutton = document.querySelector("#modalbutton");
let span = document.querySelector(".close");


let savedBooks = localStorage.getItem("books");

if(savedBooks) {
    books = JSON.parse(savedBooks);
    bookshelf.innerHTML = books.join("<br></br>");
}

function addBook() {
    let name = bookNameInput.value;
    books.push(name);
    localStorage.setItem("books", JSON.stringify(books));
    bookshelf.innerHTML = books.join("<br></br>");
}

/* addButton.onclick = addBook;
bookNameInput.addEventListener("keyup", function(enter) {
    if(enter.keyCode === 13) {
        addBook();
        enter.preventDefault();
    }
}); */

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



function createBook(book) {
    let newBook = document.createElement("div")
}

