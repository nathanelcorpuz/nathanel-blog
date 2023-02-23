import { NewArticleContext } from "@/contexts/NewArticleContext";
import { useContext, useState } from "react";
import ComponentEditor from "./component-editor/ComponentEditor";
import NewSectionModal from "./new-section-modal/NewSectionModal";
import NewSection from "./new-section/NewSection";
import styles from "./NewPage.module.css";

export default function NewPage() {
  const { state } = useContext(NewArticleContext);
  const modalState = useState(false);

  return (
    <div className={styles.new_page}>
      <ComponentEditor id="heading1" />
      <ComponentEditor id="author" />
      <ComponentEditor id="date" />
      <ComponentEditor id="paragraph" />
      {state.sections.map((section) => {
        if (section.type === "bulleted") {
          return (
            <NewSection key={section.id} type="bulleted" section={section} />
          );
        }
        if (section.type === "numbered") {
          return (
            <NewSection key={section.id} type="numbered" section={section} />
          );
        }
        return (
          <NewSection key={section.id} type="standard" section={section} />
        );
      })}
      <NewSectionModal modalState={modalState} />
      <h2>Summary</h2>
      <ComponentEditor id="paragraph" />
    </div>
  );
}
