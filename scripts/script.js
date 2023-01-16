const showBookButton = document.getElementById("new_book");
const bookForm = document.getElementById("form");
let libraryDiv = document.getElementById("library");


let hideBookButton; // Button to hide book form
let formSubmitButton; // Button to submit book form
let myLibrary = []; // Array of each book obj


// Library Functions

function Book(author, title, pageCount, hasRead) {
  // Constructor
  // Books have an Author, a Title, A Page Count and a Read(t/f)
  this.author = author
  this.title = title
  this.pageCount = pageCount
  this.hasRead = hasRead
};

// Add change function to change status

Book.prototype.changeReadStatus = function() {
  if (this.hasRead === true) {
    this.hasRead = false; 
  } else {
    this.hasRead = true;
  };
};

function addBookToLibrary(book) {
  myLibrary.push(book)
};

function displayLibrary(library) {
  for (let i = 0; i < library.length; i++) {
    let book = library[i];
    // Create a div showing the elements of each library element

  };
};

function displayBook(book) {
  let bookDiv = document.createElement("div");
  bookDiv.classList.add("card")
};