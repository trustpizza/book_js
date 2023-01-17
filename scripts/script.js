const showBookButton = document.getElementById("new_book");
const bookForm = document.getElementById("form");
let libraryDiv = document.getElementById("library");

let hideBookButton; // Button to hide book form
let formSubmitButton; // Button to submit book form
let myLibrary = []; // Array of each book obj

// Populate some prefab books

function prepopulateLibrary() {
  let book = new Book('Author', 'Title', 123, true);
  addBookToLibrary(book);
};

prepopulateLibrary()

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

Book.prototype.delete = function() {
  myLibrary.splice(myLibrary.indexOf(self));
};

function addBookToLibrary(book) {
  myLibrary.push(book)
};

// Functions to populate the library

displayLibrary() // potentially worth getting rid of the library requirement

function displayLibrary() {
  resetLibraryDiv();

  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    // Create a div showing the elements of each library element
    displayBook(book)
  };
};

function resetLibraryDiv() {
  libraryDiv.innerHTML = null
}

function displayBook(book) {
  let bookDiv = document.createElement("div");
  bookDiv.classList.add("card");
  let div = document.createElement("div");
  
  // Add delete button

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "X";

  deleteButton.addEventListener("click", () => {
    book.delete();
    displayLibrary();
  });

  div.appendChild(deleteButton);
  bookDiv.appendChild(div);
  // Add 5 divs, 1 for Title, Author, PageCount, HasRead status, and Delete button
  // Write a funciton that goes through each of the properties
  for (const property in book) {
    if (Object.hasOwnProperty.call(book, property)) {
      let element = book[property];
      let div = document.createElement("div");
      let item = document.createElement("div");
      let value = document.createElement("div");
      
      item.innerHTML = `${property.toUpperCase()}: `;
      
      if (property == 'hasRead') {
        value = document.createElement("button");
        value.innerHTML = `${element}`;

        value.addEventListener("click", () => {
          book.changeReadStatus();
          displayLibrary();
        });
      } else {
        value.innerHTML = `${element}`;
      };
      

      div.appendChild(item);
      div.appendChild(value);

      div.classList.add("card-item");

      bookDiv.appendChild(div);
    }
  };


  libraryDiv.appendChild(bookDiv)
};