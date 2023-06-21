import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(0);

  const add = () => {
    setPeople(people + 1);
  };

  const subtract = () => {
    people > 0 && setPeople(people - 1);
  };

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onAdd={add} onSubtract={subtract} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
