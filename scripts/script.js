const showBookButton = document.getElementById("new_book");
const bookForm = document.getElementById("library");
let hideBookButton;
let formSubmitButton;
let myLibrary = [];

// Library Functions

function Book(author, title, pageCount, wasRead) {
  // Constructor
  // Books have an Author, a Title, A Page Count and a Read(t/f)
  this.author = author
  this.title = title
  this.pageCount = pageCount
  this.wasRead = wasRead
};

function updateLibrary() {
  myLibrary = JSON.parse(localStorage["myLibrary"]) // Update var myLibrary to include all local storage books
}

updateLibrary() 

function addBookToLibrary(book) {
  // Add book to myLibrary
  updateLibrary()

  myLibrary.push(book) // Add book to myLib
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary)) // Set localstorage.myLib to all books
};



function showBooks() {
  // Loops through all books in library and prints their name
  updateLibrary()

  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i]

    if (book.wasRead) {
      console.log(book.title + " by: " + book.author + ". This book has been read.")
    } else {
      console.log(book.title + "by: " + book.author + ". This book is unread.")
    }
  };
};

// Buttons to work form

showBookButton.addEventListener("click", () => {
  bookForm.classList.add("viewable");

  hideBookButton = document.getElementById("hide-library");
  hideBookButton.addEventListener("click", () => {
    bookForm.classList.remove("viewable")
  });

  formSubmitButton = document.getElementById("submit");
  formSubmitButton.addEventListener("click", () => {
    event.preventDefault()

    let author = document.getElementById("author");
    let title = document.getElementById("title");
    let pageCount = document.getElementById("pages");
    let wasRead = document.getElementById("wasRead");

    let book = new Book(author.value, title.value, pageCount.value, wasRead.value)
    addBookToLibrary(book)
  })

});