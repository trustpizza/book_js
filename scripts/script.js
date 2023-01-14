const showBookButton = document.getElementById("new_book")
const bookForm = document.getElementById("library")


showBookButton.addEventListener("click", () => {
    bookForm.classList.add("viewable")
  });


// Library Functions

let myLibrary = []

function Book(author, title, pageCount, wasRead) {
  // Constructor
  // Books have an Author, a Title, A Page Count and a Read(t/f)
  this.author = author
  this.title = title
  this.pageCount = pageCount
  this.wasRead = wasRead
}

function addBookToLibrary() {
  // Add book to myLibrary
  
}

function showBooks() {
  // Loops through all books in library and prints their name
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i]

    if (book.wasRead) {
      console.log(book.name + "by: " + book.author + ". This book has been read.")
    } else {
    console.log(book.name + "by: " + book.author + ". This book is unread.")
    }
  }
}