import { useState } from "react";
import styles from "./NewSectionModal.module.css";
import NewStandardSectionForm from "./standard/NewStandardSectionForm";

export default function NewSectionModal({ modalState }) {
  const [open, setOpen] = modalState;
  const [type, setType] = useState("standard");
  return (
    <>
      <button onClick={() => setOpen(true)}>Add section</button>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className={styles.new_section_modal_wrapper}
        >
          <section onClick={(e) => e.stopPropagation()}>
            <form>
              <div>
                <label for="section">Add new section</label>
                <select
                  onChange={(e) => setType(e.target.value)}
                  name="section"
                  id="section"
                >
                  <option value="standard">standard</option>
                  <option value="numbered">numbered</option>
                  <option value="bulleted">bulleted</option>
                </select>
              </div>
              {type === "standard" && <NewStandardSectionForm />}
              {/* {type === "numbered" && <NewStandardSectionForm />}
              {type === "bulleted" && <NewStandardSectionForm />} */}
            </form>
          </section>
        </div>
      )}
    </>
  );
}
