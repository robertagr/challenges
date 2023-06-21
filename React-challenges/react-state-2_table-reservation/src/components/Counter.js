// import { useState } from "react";

export default function Counter({ onAdd, onSubtract }) {
  // const [people, setPeople] = useState(0);
  return (
    <>
      <h2>How many people would you like to visit us with?</h2>
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment people count"
          onClick={onAdd}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement people count"
          onClick={onSubtract}
        >
          -
        </button>
      </div>
    </>
  );
}
