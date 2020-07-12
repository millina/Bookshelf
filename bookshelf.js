let bookNameInput = document.querySelector("#book-name");
let addButton = document.querySelector("#add-book");
let bookshelf = document.querySelector("#bookshelf");
let books = [];

let savedBooks = localStorage.getItem("books");

if(savedBooks) {
    books = savedBooks.split(",");
    bookshelf.innerHTML = books.join("<br></br>");
}

function addBook() {
    let name = bookNameInput.value;
    books.push(name);
    localStorage.setItem("books", books);
    bookshelf.innerHTML = books.join("<br></br>");
}

addButton.onclick = addBook;
bookNameInput.addEventListener("keyup", function(enter) {
    if(enter.keyCode === 13) {
        addBook();
        enter.preventDefault();
    }
});



function createBook(book) {
    let newBook = document.createElement("div")
}