import styles from "./ComponentEditor.module.css";
import { useState } from "react";

export default function ComponentEditor({ id, retrievedValue, placeholder }) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(retrievedValue || id);

  let articleElement;

  if (id === "heading1") {
    articleElement = <h1>{value}</h1>;
  }

  if (id === "heading2") {
    articleElement = <h2>{value}</h2>;
  }

  if (id === "heading3") {
    articleElement = <h3>{value}</h3>;
  }

  if (id === "heading4") {
    articleElement = <h4>{value}</h4>;
  }

  if (id === "author" || id === "date") {
    articleElement = <small>{value}</small>;
  }

  if (id === "paragraph") {
    articleElement = <p>{value}</p>;
  }

  return (
    <div
      onClick={() => setEditing(true)}
      className={editing ? styles.div_editing : styles.div_not_editing}
    >
      {editing ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setEditing(false);
          }}
        >
          <label htmlFor={id}>
            <h6 style={{ fontSize: "1rem", fontWeight: "normal" }}>
              <em>Press enter to edit "{id}" component</em>
            </h6>
          </label>
          <input
            id={id}
            placeholder={id}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </form>
      ) : (
        articleElement || retrievedValue || id
      )}
    </div>
  );
}