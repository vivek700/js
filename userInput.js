//Getting input from user in terminal or console
// console.log(prompt("Enter your name.")); //This only works in deno and bun

// import readline from "readline";
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
//
// rl.question("What is your name?\n", (name) => {
//   console.log(`hey ${name}!`);
//   rl.close();
// });
//
import readline from "node:readline/promises";
import process from "node:process";

const { stdin: input, stdout: output } = process;
const askQuestion = async function () {
  const rl = readline.createInterface({ input, output });
  const ans = await rl.question("Enter your name \n");
  console.log(ans);
  rl.close();
};

askQuestion();

//for cammand line arguments
const args = process.argv;

console.log(args);

//for flags from command line
// import { parseArgs } from "node:util";
//
// const options = {
//   name: { type: "string" },
//   verbose: { type: "boolean", short: "v" },
// };
//
// const { values } = parseArgs({ options });
//
// console.log(values.name);
// console.log(values.verbose);
