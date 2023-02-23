import Modal from "@/components/common/modal/Modal";
import { NewArticleContext } from "@/contexts/NewArticleContext";
import { useContext, useState } from "react";
import styles from "./NewSectionModal.module.css";

export default function NewSectionModal({ modalState }) {
  const [_, setOpen] = modalState;
  const [sectionType, setSectionType] = useState("standard");
  const { dispatch } = useContext(NewArticleContext);
  return (
    <>
      <button onClick={() => setOpen(true)}>Add section</button>
      <Modal state={modalState}>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            dispatch({
              type: "add_section",
              sectionType,
            });
            setOpen(false);
          }}
        >
          <div>
            <label htmlFor="section">Add a new section</label>
            <select
              onChange={(e) => setSectionType(e.target.value)}
              value={sectionType}
              name="section"
              id="section"
            >
              <option value="standard">standard</option>
              <option value="numbered">numbered</option>
              <option value="bulleted">bulleted</option>
            </select>
          </div>
          <button>Add</button>
        </form>
      </Modal>
    </>
  );
}
