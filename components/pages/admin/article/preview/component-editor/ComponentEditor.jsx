import styles from "./ComponentEditor.module.css";
import { useContext, useState } from "react";
import { NewArticleContext } from "@/contexts/NewArticleContext";
import formOnSubmit from "@/lib/utils/admin/component-editor/formOnSubmit";
import Modal from "@/components/common/modal/Modal";
import RichText from "./rich-text/RichText";
import Element from "./Element";

export default function ComponentEditor({
  id = "",
  state = "",
  sectionId = "",
  paragraphId = "",
  itemId = "",
}) {
  const { dispatch } = useContext(NewArticleContext);
  const modal = useState(false);
  const [_, setModalOpen] = modal;
  const [value, setValue] = useState(state);
  const [highlightedText, setHighlightedText] = useState({
    text: "",
    start: 0,
    end: 0,
  });

  function handleSelection() {
    const selection = window.getSelection();
    setHighlightedText((prev) => {
      return {
        ...prev,
        text: selection.toString(),
        start: selection.focusNode[2].selectionStart,
        end: selection.focusNode[2].selectionEnd,
      };
    });
  }

  return (
    <>
      <div
        className={styles.div}
        onClick={() => setModalOpen(true)}
        style={{ paddingRight: id === "paragraph" ? 30 : 0 }}
      >
        <Element id={id}>{state}</Element>
      </div>
      <Modal state={modal}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setModalOpen(false);
            formOnSubmit(dispatch, value, id, paragraphId, sectionId, itemId);
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            width: "100%",
          }}
        >
          <label
            htmlFor={id}
            style={{ fontSize: "1rem", fontWeight: "normal" }}
          >
            <em>Press enter to edit "{id}" component</em>
          </label>
          <RichText setValue={setValue} highlightedText={highlightedText} />
          <textarea
            onMouseUp={handleSelection}
            id={id}
            placeholder={id}
            onChange={(e) => setValue(e.target.value)}
            value={value}
            style={{
              fontFamily: "inherit",
              padding: 20,
              width: "100%",
              resize: "none",
            }}
          />
          <div style={{ display: "flex", gap: 10 }}>
            <button type="button" onClick={() => setModalOpen(false)}>
              Cancel
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </Modal>
    </>
  );
}
