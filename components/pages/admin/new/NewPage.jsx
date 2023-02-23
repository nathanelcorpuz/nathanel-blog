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
      <div>
        <ComponentEditor id="heading" state={state.headline.heading} />
        <ComponentEditor id="author" state={state.author.name} />
        <ComponentEditor id="date" state={state.dates.published} />
        <ComponentEditor id="subheading" state={state.headline.subheading} />
      </div>
      <div className={styles.sections}>
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
      </div>
      <NewSectionModal modalState={modalState} />
      <div>
        <h2 style={{ padding: 15 }}>Summary</h2>
        <ComponentEditor id="summary" state={state.summary} />
      </div>
    </div>
  );
}
