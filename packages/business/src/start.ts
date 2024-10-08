import * as readline from "readline";
import { PriceCalculator } from "@tstv/business";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is the price? ", (price: string): void => {
  const input = parseInt(price, 10);
  if (isNaN(input)) {
    throw new Error(`Invalid input: "${price}" is not a number.`);
  }
  const total = PriceCalculator.getTotal(input);
  console.log(`Total including interest rate is "${total}".`);
  rl.close();
});

rl.on("close", () => process.exit(0));
