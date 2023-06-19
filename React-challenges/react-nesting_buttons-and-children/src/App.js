import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click</Button>
      <Button>Here</Button>
      <Button>Good</Button>
      <Button>Job!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
