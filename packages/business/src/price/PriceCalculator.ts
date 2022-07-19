import { FinanceAPI } from "@tstv/api";

class PriceCalculator {
  static getTotal(price: number): number {
    const interest = price * FinanceAPI.getInterestRate();
    return price + interest;
  }
}

export { PriceCalculator };
