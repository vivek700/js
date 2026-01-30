console.log("1. Start");

setTimeout(function () {
  console.log("2. Timeout");
}, 0);

const promise = await new Promise((resolve) => resolve("3. Promise"));

console.log(promise);

console.log("4. End");
