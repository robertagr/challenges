import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleAddTag(newTag) {
    console.log(newTag);
    setTags([...tags, newTag]);
  }

  function handleDeleteTag(tagToDelete) {
    const filteredTags = tags.filter((tag) => tag !== tagToDelete);
    setTags(filteredTags);
  }

  // OR :
  // setTags(tags.filter((tag) => tag !== tagToDelete));

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List tags={tags} onDeleteTag={handleDeleteTag} />
    </main>
  );
}
