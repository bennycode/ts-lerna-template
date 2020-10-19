"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCalculator = void 0;
const api_1 = require("@tstv/api");
class PriceCalculator {
    static getTotal(price) {
        const interest = price * api_1.FinanceAPI.getInterestRate();
        return price + interest;
    }
    ;
}
exports.PriceCalculator = PriceCalculator;
//# sourceMappingURL=PriceCalculator.js.map