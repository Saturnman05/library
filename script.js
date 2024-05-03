const myLibrary = [];

// Book constructor
function Book(title, author, numberOfPages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
    this.info = () => {
        const message = `${this.title} by ${this.author}, ${this.numberOfPages} pages, ${this.read ? "read" : "not read yet"}`;
        return message;
    };
}

// Function to add books to the library
function addBookToLibrary(book) {
    myLibrary.push(book);
}

// Adding books to the library
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 254, false);
addBookToLibrary(book1);

const book2 = new Book("Dune", "Frank Herbert", 300, true);
addBookToLibrary(book2);

const book3 = new Book("Harry Potter and the Philosofer's Stone", "J.K. Rowling", 150, true);
addBookToLibrary(book3);

// Function to display the books
function displayBooks() {
    const booksContainer = document.getElementById("books-container");
    booksContainer.innerHTML = "";

    myLibrary.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        const titleElement = document.createElement("div");
        titleElement.classList.add("book-title");
        titleElement.textContent = book.title;

        const authorElement = document.createElement("div");
        authorElement.classList.add("book-author");
        authorElement.textContent = `by ${book.author}`;

        const pagesElement = document.createElement("div");
        pagesElement.classList.add("book-pages");
        pagesElement.textContent = `Amount of pages: ${book.numberOfPages}`;

        const isRead = document.createElement("div");
        isRead.classList.add("book-is-read");
        isRead.textContent = book.read ? "You read this book" : "Book not read";

        const deleteBook = document.createElement("button");
        deleteBook.textContent = "Delete book";
        deleteBook.addEventListener("click", () => {
            const indice = myLibrary.indexOf(book);
            myLibrary.splice(indice, 1);
            displayBooks();
        });

        const changeReadStatus = document.createElement("button");
        changeReadStatus.textContent = "Change read status";
        changeReadStatus.addEventListener("click", () => {
            book.read = !book.read;
            displayBooks();
        });

        bookCard.appendChild(titleElement);
        bookCard.appendChild(authorElement);
        bookCard.appendChild(pagesElement);
        bookCard.appendChild(isRead);
        bookCard.appendChild(deleteBook);
        bookCard.appendChild(changeReadStatus);

        booksContainer.appendChild(bookCard);
        booksContainer.appendChild(
            document.createElement("br")
        );
    });
}
displayBooks();

// Form to add a book
const btnNewBook = document.querySelector("#new-book");
const dialog = document.querySelector("dialog");
const btnSubmit = document.querySelector("#submit");

btnNewBook.addEventListener("click", () => {
    dialog.showModal();
});

btnSubmit.addEventListener("click", event => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.getElementById("is-read").checked;

    const newBook = new Book(title, author, pages, isRead);
    addBookToLibrary(newBook);

    dialog.close();
    displayBooks();
});