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
    this.hasRead = false 
  } else {
    this.hasRead = true
  }
}

// This down below is broken

function updateLibrary() {
  if (localStorage.myLibrary) {
    myLibrary = JSON.parse(localStorage["myLibrary"]) // Update var myLibrary to include all local storage books
  }
};
