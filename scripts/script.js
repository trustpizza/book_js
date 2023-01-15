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

// This down below is broken

function updateLibrary() {
  myLibrary = JSON.parse(localStorage["myLibrary"]) // Update var myLibrary to include all local storage books
};


function addBookToLibrary(book) {
  // Add book to myLibrary

  myLibrary.push(book) // Add book to myLib
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary)) // Set localstorage.myLib to all books
  updateLibrary()
};

function createBookDiv(book) {
  updateLibrary()

  let newDiv = document.createElement("div");
  newDiv.classList.add("card");

  let title = document.createElement("div");
  let author = document.createElement("div");
  let pageCount = document.createElement("div");
  let hasRead = document.createElement("div");

  title.innerHTML = book["title"];
  author.innerHTML = book["author"];
  pageCount.innerHTML = book["pageCount"]
  hasRead.innerHTML = book["hasRead"]

  newDiv.appendChild(title);
  newDiv.appendChild(author);
  newDiv.appendChild(pageCount);
  newDiv.appendChild(hasRead);

  libraryDiv.appendChild(newDiv); // Add new div to library
}

function showBooks() {
  // Loops through all books in library and prints their name
  updateLibrary();

  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i]
    
    createBookDiv(book)
    //take each book
    // Create a div nested inside #library
    // Place that book's contents inside that div
    // Repeat
    
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
    let hasRead = document.getElementById("hasRead");

    let book = new Book(author.value, title.value, pageCount.value, hasRead.value)
    addBookToLibrary(book)
  })
});