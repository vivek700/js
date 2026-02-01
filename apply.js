function printValues(value1, value2) {
  console.log(`Printing value: ${this.value} and values: ${value1}, ${value2}`);
}

const obj = {
  value: 10,
};

printValues.apply(obj, [1, 2, 3, 4, 5, 6, 6]);
