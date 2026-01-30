const books = {
  b001: { title: "To Kill a Mockingbird", price: 18.99, isAvailable: true },
  b002: { title: "1984", price: 15.99, isAvailable: false },
  b003: { title: "The Great Gatsby", price: 12.49, isAvailable: true },
  b004: { title: "Moby Dick", price: 22.5, isAvailable: false },
};

// Object.entries returns an array of arrays, where each inner
// array contains two elements: the key and the value of each
// property in the object.

const bookEntries = Object.entries(books);
bookEntries
  .filter(([, book]) => book.price > 16)
  .forEach(([id, book]) =>
    console.log(`ID: ${id} Book: ${book.title} £${book.price}`),
  );
