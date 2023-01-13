let myLibrary = ["To Kill a Mockingbird", "Slaughterhouse Five", "Davinci Code"]

function Book() {
  // Constructor
}

function addBookToLibrary() {
  // Add book to myLibrary
  
}

function showBooks() {
  // Loops through all books in library and prints their name
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i]
    console.log(book.name)
  }
}