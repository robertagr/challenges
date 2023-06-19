import React from "react";
import "./styles.css";

export default function App() {
  return (
    <Button
      color={"blue"}
      text={"I'm a button"}
      disabled
      handleClick={handleClick}
    />
  );
}

function Button({ color, disabled, text, handleClick }) {
  function handleClick() {
    console.log("Clicked the button");
  }
  return (
    <button
      disabled={disabled}
      style={{ background: color }}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
