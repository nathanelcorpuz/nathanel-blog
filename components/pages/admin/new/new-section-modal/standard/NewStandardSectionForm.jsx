import { useReducer, useState } from "react";

export default function NewStandardSectionForm() {
  const [type, setType] = useState("");
  const [heading, setHeading] = useState("");
  const [paragraphs, setParagraphs] = useState([]);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <input placeholder="heading" />
      <button type="button">Add a paragraph</button>
    </div>
  );
}
