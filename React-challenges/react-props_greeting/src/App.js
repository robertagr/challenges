import "./styles.css";

export default function App() {
  return <Greeting name="Gimena" />;
}

function Greeting({ name }) {
  const coaches = ["Klaus", "Gimena", "Sven"];
  return <h1>Hello, {coaches.includes(name) ? name : "Stranger"}</h1>;
}

// SECOND CASE, WE CAN WRITE THE VAR COACHES INSIDE THE FUNCTION APP AND PASS COACHES AS PROPS INSIDE THE GREETING COMPONENT

// export default function App() {
//   const coaches = ["Klaus", "Gimena", "Sven"];
//   return <Greeting name="Gimena" coaches={coaches} />;
// }

// function Greeting({ name, coaches }) {
//   return <h1>Hello, {coaches.includes(name) ? name : "Stranger"}</h1>;
// }
