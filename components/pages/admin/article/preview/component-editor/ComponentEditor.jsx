import styles from "./ComponentEditor.module.css";
import { useContext, useState } from "react";
import { NewArticleContext } from "@/contexts/NewArticleContext";
import getArticleElement from "@/lib/utils/admin/component-editor/getArticleElement";
import formOnSubmit from "@/lib/utils/admin/component-editor/formOnSubmit";

export default function ComponentEditor({
  id = "",
  state = "",
  sectionId = "",
  paragraphId = "",
  itemId = "",
}) {
  const { dispatch } = useContext(NewArticleContext);
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(state);

  const element = getArticleElement(state, id);

  return (
    <div
      onClick={() => setEditing(true)}
      className={editing ? styles.div_editing : styles.div_not_editing}
      style={{ paddingRight: id === "paragraph" ? 30 : 0}}
    >
      {editing ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setEditing(false);
            formOnSubmit(dispatch, value, id, paragraphId, sectionId, itemId);
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
        element
      )}
    </div>
  );
}
