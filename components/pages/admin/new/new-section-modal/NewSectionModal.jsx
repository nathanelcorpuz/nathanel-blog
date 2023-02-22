import { NewArticleContext } from "@/contexts/NewArticleContext";
import { useContext, useState } from "react";
import styles from "./NewSectionModal.module.css";
import NewListSectionForm from "./numbered/NewListSectionForm";
import NewStandardSectionForm from "./standard/NewStandardSectionForm";

export default function NewSectionModal({ modalState }) {
  const [open, setOpen] = modalState;
  const [sectionType, setSectionType] = useState("standard");
  const { state, dispatch } = useContext(NewArticleContext);
  return (
    <>
      <button onClick={() => setOpen(true)}>Add section</button>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className={styles.new_section_modal_wrapper}
        >
          <section onClick={(e) => e.stopPropagation()}>
            <form
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
          </section>
        </div>
      )}
    </>
  );
}
