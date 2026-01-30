console.log(greet("vivek"));
const greet = function (name) {
  return `Hello, ${name}!`;
};

const add = (a, b) => a + b;

function calculate(num1, num2, operationFn) {
  console.log("Calculating...");
  return operationFn(num1, num2);
}

console.log(calculate(5, 6, add));
