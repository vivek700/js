const hidden = Symbol();

const book = {
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  year: 1951,
};

book[hidden] = "The book has gone missing";

console.log(Object.keys(book));
console.log(book[hidden]);
