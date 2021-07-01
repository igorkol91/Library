// const booksContainer = document.querySelector('.books-container');
const booksList = document.querySelector('.books-list');
const createNew = document.querySelector('#add-book-btn');
createNew.addEventListener('click', () => {
  const form = document.querySelector('#form-input');
  form.classList.toggle('d-none');
});

const books = [{ id: 1, title: 'name', author: 'author', status: false, pages: 100 }, { id: 2, title: 'name', author: 'author', status: true, pages: 100 }, { id: 3, title: 'name', author: 'author', status: true, pages: 100 }];

books.map((book) => {
  const trElement = document.createElement('tr');
  trElement.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.pages}</td><td>${book.status ? 'Read' : `<button id='btn${book.id}' data-index=${book.id} class='btn btn-primary'>ReadBook</button>`}</td>`;
  return booksList.appendChild(trElement);
});
