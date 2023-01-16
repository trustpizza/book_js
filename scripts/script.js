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
  if (localStorage.myLibrary) {
    myLibrary = JSON.parse(localStorage["myLibrary"]) // Update var myLibrary to include all local storage books
  }
};


function addBookToLibrary(book) {
  // Add book to myLibrary

  myLibrary.push(book) // Add book to myLib
  setLocalStorageLibrary(myLibrary) // Set localstorage.myLib to all books
  updateLibrary();
};

function setLocalStorageLibrary(library) {
  localStorage.setItem("myLibrary", JSON.stringify(library));
}

function createBookDiv(book, index) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("card");
  newDiv.classList.add("card-" + index)

  let title = document.createElement("div");
  let author = document.createElement("div");
  let pageCount = document.createElement("div");
  let hasRead = document.createElement("div");

  title.innerHTML = "Title: " + book["title"];
  author.innerHTML = "Author: " + book["author"];
  pageCount.innerHTML = "Page Count: " + book["pageCount"];
  hasRead.innerHTML = "Read? " + book["hasRead"];

  newDiv.appendChild(title);
  newDiv.appendChild(author);
  newDiv.appendChild(pageCount);
  newDiv.appendChild(hasRead);

  libraryDiv.appendChild(newDiv); // Add new div to library
}

function addDeleteButton(bookDiv, index) {
  let deleteButton = document.createElement("button")
  deleteButton.innerText = "Delete Book"
  
  deleteButton.addEventListener("click", () => {
    bookDiv.remove();

    myLibrary.splice(index, index+1);
    setLocalStorageLibrary(myLibrary)
  })

  bookDiv.appendChild(deleteButton);
}

function showBooks() {
  // Loops through all books in library and prints their name
  updateLibrary();

  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i]

    createBookDiv(book, i)
  };

  let library = libraryDiv.children

  for (let i = 0; i < myLibrary.length; i++) {
    addDeleteButton(library[i], i)
  }

};

function resetBooks() {
  updateLibrary();

  libraryDiv.innerHTML = ""
}

// Buttons to work form
showBooks()

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

    let book = new Book(author.value, title.value, pageCount.value, hasRead.checked)
    addBookToLibrary(book)
   
    resetBooks() // Prevents duplicates
    showBooks()
  })
});