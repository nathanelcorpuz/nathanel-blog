import { NewArticleContext } from "@/contexts/NewArticleContext";
import { useContext, useState } from "react";
import styles from "./DeleteSectionBtn.module.css";

export default function DeleteSectionBtn({ sectionId }) {
  const [modalOpen, setModalOpen] = useState(false);
  const { dispatch } = useContext(NewArticleContext);
  return (
    <div>
      <button
        className={styles.delete_btn}
        onClick={() => setModalOpen(!modalOpen)}
      >
        x
      </button>
      {modalOpen && (
        <div
          className={styles.delete_btn_modal}
          onClick={() => setModalOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <h1 style={{ paddingBottom: 20 }}>
              Are you sure you want to delete this section?
            </h1>
            <button
              onClick={() => {
                dispatch({ type: "delete_section", sectionId });
                setModalOpen(false);
              }}
            >
              yes
            </button>
            <button
              style={{ marginLeft: 10 }}
              onClick={() => {
                setModalOpen(false);
              }}
            >
              no
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
