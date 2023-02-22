import { NewArticleContext } from "@/contexts/NewArticleContext";
import { useContext, useState } from "react";
import ComponentEditor from "./component-editor/ComponentEditor";
import NewSectionModal from "./new-section-modal/NewSectionModal";
import styles from "./NewPage.module.css";

export default function NewPage() {
  const { state, dispatch } = useContext(NewArticleContext);
  const modalState = useState(false);

  return (
    <div className={styles.new_page}>
      <ComponentEditor id="heading1" />
      <ComponentEditor id="author" />
      <ComponentEditor id="date" />
      <ComponentEditor id="paragraph" />
      <NewSectionModal modalState={modalState} />
      <h2>Summary</h2>
      <ComponentEditor id="paragraph" />
    </div>
  );
}
