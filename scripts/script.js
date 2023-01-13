let myLibrary = ["To Kill a Mockingbird", "Slaughterhouse Five", "Davinci Code"]

function Book() {
  // Constructor
  // Books have an Author, a Title, A Page Count and a Read(t/f)
}

function addBookToLibrary() {
  // Add book to myLibrary
  
}

function showBooks() {
  // Loops through all books in library and prints their name
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i]

    if (book.was_read) {
      console.log(book.name + "by: " + book.author + ". This book has been read.")
    } else {
    console.log(book.name + "by: " + book.author + ". This book is unread.")
    }
  }
}