import styles from "./ComponentEditor.module.css";
import { useContext, useState } from "react";
import { NewArticleContext } from "@/contexts/NewArticleContext";

export default function ComponentEditor({ id = "", state = "" }) {
  const { dispatch } = useContext(NewArticleContext);
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(state);

  let articleElement;

  if (id === "heading") {
    articleElement = <h1>{state}</h1>;
  }

  if (id === "heading2") {
    articleElement = <h2>{state}</h2>;
  }

  if (id === "heading3") {
    articleElement = <h3>{state}</h3>;
  }

  if (id === "heading4") {
    articleElement = <h4>{state}</h4>;
  }

  if (id === "author" || id === "date") {
    articleElement = <small> {state}</small>;
  }

  if (id === "paragraph" || id === "subheading" || id === "summary") {
    articleElement = <p>{state}</p>;
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
            // handle all state changes on "enter" key
            // for headline
            if (id === "heading" || id === "subheading") {
              console.log("heading or subheading input change");
              dispatch({
                type: "edit_headline",
                headline: { element: id },
                newValue: value || id,
              });
              return;
            }
            // for author
            if (id === "author") {
              console.log("author input change");
              dispatch({
                type: "edit_author",
                author: { element: "name" },
                newValue: value || id,
              });
            }
            // for dates
            if (id === "date") {
              console.log("date input change");
              dispatch({
                type: "edit_dates",
                dates: { element: "published" },
                newValue: value || id,
              });
            }
            // for sections
            // for summary
            if (id === "summary") {
              console.log("summary input change");
              dispatch({
                type: "edit_summary",
                newValue: value,
              });
            }
          }}
        >
          <label
            htmlFor={id}
            style={{ fontSize: "1rem", fontWeight: "normal" }}
          >
            <em>Press enter to edit "{id}" component</em>
          </label>
          <input
            id={id}
            placeholder={id}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </form>
      ) : (
        articleElement
      )}
    </div>
  );
}
