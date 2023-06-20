import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  let [count, setCount] = useState(0);
  const buttonHandlerPlus = () => {
    setCount(count + 1);
    console.log("button");
  };
  const buttonHandlerMinus = () => {
    setCount(Math.max(count - 1));
  };

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={buttonHandlerMinus}>
          -
        </button>
        <button type="button" onClick={buttonHandlerPlus}>
          +
        </button>
      </div>
    </div>
  );
}
