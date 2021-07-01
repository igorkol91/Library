// const booksContainer = document.querySelector('.books-container');
const booksList = document.querySelector(".books-list");
const createNew = document.querySelector("#add-book-btn");

createNew.addEventListener("click", () => {
  const form = document.querySelector("#form-input");
  form.classList.toggle("d-none");
});

const books = [
  {
    id: 1,
    title: "name",
    author: "author",
    status: false,
    pages: 100,
  },
  {
    id: 2,
    title: "name",
    author: "author",
    status: true,
    pages: 100,
  },
  {
    id: 3,
    title: "name",
    author: "author",
    status: true,
    pages: 100,
  },
  {
    id: 1,
    title: "name",
    author: "author",
    status: false,
    pages: 100,
  },
  {
    id: 2,
    title: "name",
    author: "author",
    status: true,
    pages: 100,
  },
  {
    id: 3,
    title: "name",
    author: "author",
    status: true,
    pages: 100,
  },
];

books.map((book) => {
  const trElement = document.createElement("tr");
  trElement.innerHTML = `<td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${
        book.status
          ? `<button id='btn${book.id}' data-index=${book.id} class='btn btn-warning book-control-btn'>Read</button>`
          : `<button id='btn${book.id}' data-index=${book.id} class='btn btn-primary book-control-btn'>Read Book</button>`
      }</td>
       <td>${`<button id='btn${book.id}' data-index=${book.id} class='btn btn-danger book-control-btn-detele'>Remove</button>`}</td>`;
  return booksList.appendChild(trElement);
});

const bookBtns = document.querySelectorAll(".book-control-btn");
const bookDeleteBtns = document.querySelectorAll(".book-control-btn-detele");
function toggleBookStatus(btn) {
  const bookId = btn.dataset.index;
  console.log(`toggle ${bookId}`);
}

function handleDeleteBook(btn) {
  const bookId = btn.dataset.index;
  console.log(`delete ${bookId}`);
}
const bookArray = Array.from(bookBtns);
const deleteBtns = Array.from(bookDeleteBtns);

if (bookArray.length > 0) {
  bookArray.map((btn) => {
    return btn.addEventListener("click", () => toggleBookStatus(btn));
  });
  deleteBtns.map((btn) => {
    return btn.addEventListener("click", () => handleDeleteBook(btn));
  });
}
