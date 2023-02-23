import { NewArticleContext } from "@/contexts/NewArticleContext";
import { useContext, useState } from "react";
import styles from "./DeleteItemBtn.module.css";

export default function DeleteItemBtn({ itemId, sectionId }) {
  const [modalOpen, setModalOpen] = useState();
  const { dispatch } = useContext(NewArticleContext);
  return (
    <div>
      <button className={styles.btn} onClick={() => setModalOpen(!modalOpen)}>
        x
      </button>
      {modalOpen && (
        <div className={styles.modal} onClick={() => setModalOpen(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <h1 style={{ paddingBottom: 20 }}>
              Are you sure you want to delete this item?
            </h1>
            <button
              onClick={() => {
                dispatch({ type: "delete_item", sectionId, itemId });
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
