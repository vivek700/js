class Holiday {
  //private properties can't be accessed outside a class
  #destination;
  #price;
  constructor(destination, price) {
    this.#destination = destination;
    this.#price = price;
  }

  get destination() {
    return this.#destination;
  }

  set destination(newDes) {
    if (typeof newDes != "string" || newDes.length <= 0)
      throw new Error("Destination is not valid");
    this.#destination = newDes;
  }

  get price() {
    return `$${this.#price.toFixed(2)}`;
  }

  set price(newPrice) {
    if (typeof newPrice != "number") throw new Error("Price must be number");
    this.#price = newPrice;
  }
}

const safari = new Holiday("kenya", 1000);
console.log(safari);
console.log(safari.destination);
safari.destination = "Africa";
console.log(safari.destination);
console.log(safari.price);
safari.price = 2000;
console.log(safari.price);
