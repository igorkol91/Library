// const booksContainer = document.querySelector('.books-container');
window.onload = () => {
  showBooks();
};
const booksList = document.querySelector(".books-list");
const createNew = document.querySelector("#add-book-btn");
let myLibrary = [];
const newBookForm = document.querySelector("#form-input");
let bookDeleteBtns = document.querySelectorAll(".book-control-btn-detele");
let bookBtns = document.querySelectorAll(".book-control-btn");
let booksId = 0;

function Book(title, author, pages, status = false) {
  booksId++;
  this.id = booksId;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

Book.prototype.toggleBookStatus = (id) => {
  const index = myLibrary.findIndex((b) => b.id == id);
  const status = myLibrary[index].status;
  myLibrary[index].status = status ? false : true;
  showBooks();
};

function addBookToLibrary(title, author, pages) {
  const book = new Book(title, author, pages);
  myLibrary.push(book);
  showBooks();
}

function handleDeleteBook(id) {
  const newBooks = myLibrary.filter((book) => book.id != id);
  myLibrary = newBooks;
  showBooks();
}

function toggleStatus(id) {
  const book = new Book();
  book.toggleBookStatus(id);
}

newBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = e.target.title.value;
  let author = e.target.author.value;
  let pages = e.target.pages.value;
  addBookToLibrary(title, author, pages);
  e.target.title.value = "";
  e.target.author.value = "";
  e.target.pages.value = "";
});

createNew.addEventListener("click", () => {
  const form = document.querySelector("#form-input");
  form.classList.toggle("d-none");
});

function showBooks() {
  booksList.innerHTML = "";
  myLibrary.map((book) => {
    const trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td>${
      book.status
        ? `<button id=${book.id} data-index=${book.id} class='btn btn-warning book-control-btn' onclick="toggleStatus(this.id)">Read</button>`
        : `<button id=${book.id} data-index=${book.id} class='btn btn-primary book-control-btn' onclick="toggleStatus(this.id)">Read Book</button>`
    }</td>
    <td>${`<a id=${book.id} data-index=${book.id} href='#' class='btn btn-danger book-control-btn-detele' onclick="handleDeleteBook(this.id)">Remove</a>`}</td>`;
    return booksList.appendChild(trElement);
  });
}
