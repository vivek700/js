const dateSnapshot = new Date();
console.log(dateSnapshot.getFullYear());

const arr = new Array();
console.log(arr);
arr.push(1, 2);
console.log(arr);

const bool = new Boolean(true);
const bool1 = Boolean();

console.log(typeof bool);
console.log(bool.valueOf());
console.log(typeof bool1);

const num = 9_007_199_254_740_991; //Nine quadrillion, seven trillion, one hundred ninety-nine billion, two hundred fifty-four million, seven hundred forty thousand, nine hundred ninety-one
const num1 = BigInt(900719925474099134567);
console.log(typeof num);
console.log(num);
console.log(typeof num1);
// console.log(num1 - 1);
console.log(Math.round(Math.random() * 3 * 100) / 100);
console.log(new Date().toLocaleTimeString("it-IT"));
