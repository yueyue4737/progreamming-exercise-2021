class Bookshelf {
  constructor() {
    this.favoriteBooks = [];
  }

  addFavoriteBook(bookName) {
    if (!bookName.includes("Great")) {
      this.favoriteBooks.push(bookName);
    }
  }

  printFavoriteBooks() {
    console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
    for (let bookName of favoriteBooks) {
      console.log(bookName);
    }
  }
}

function loadBooks(theBookShelf) {
  fakeAjax(BOOK_API, function onBooks(bookNames) {
    for (bookName of bookNames) {
      this.addFavoriteBook(bookName);
    }
    this.printFavoriteBooks(bookName);
  });
}

var BOOK_API = "https://some.url/api";

var myBookShelf = new Bookshelf();
loadBooks(myBookShelf);

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url, cb) {
  setTimeout(function fakeLoadingDelay() {
    cb([
      "A Song of Ice and Fire",
      "The Great Gatsby",
      "Crime & Punishment",
      "Great Expectations",
      "You Don't Know JS",
    ]);
  }, 500);
}