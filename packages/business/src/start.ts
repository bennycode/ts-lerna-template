import * as readline from "readline";
import { PriceCalculator } from "@tstv/business";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is the price? ", (price: string) => {
  const total = PriceCalculator.getTotal(parseInt(price, 10));
  console.log(`Total including interest rate is "${total}".`);
  rl.close();
});

rl.on("close", () => process.exit(0));
