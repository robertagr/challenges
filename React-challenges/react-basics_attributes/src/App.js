import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Hello</h2>
      <label htmlFor="text" id="text">
        People
      </label>
      <input type="text" name="text" id="text"></input>
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/React_(software)"
      >
        Here is the link
      </a>
    </article>
  );
}
