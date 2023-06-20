import "./styles.css";
import { useState } from "react";

export default function App() {
  let [isActive, setActive] = useState(false);
  //let [isToggle, setIsToggle] = useState("Active");

  function handleClick() {
    setActive(!isActive);
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive ? "desactivate" : "activate"}
      </button>
    </main>
  );
}
