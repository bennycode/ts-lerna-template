import React from "react";
import ReactDOM from "react-dom";
import { PriceCalculator } from "@tstv/business";

const DivWrapper = (props: React.HTMLProps<HTMLDivElement>) => (
  <div {...props} />
);

const App = () => (
  <>
    <h1>Hello, {PriceCalculator.getTotal(100)}!</h1>
    <DivWrapper children={<span>Hello, World!</span>} />
  </>
);
const rootNode = document.getElementById("root");

ReactDOM.render(<App />, rootNode);
