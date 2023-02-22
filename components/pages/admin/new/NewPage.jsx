import { NewArticleContext } from "@/contexts/NewArticleContext";
import { useContext, useState } from "react";
import ComponentEditor from "./component-editor/ComponentEditor";
import NewSectionModal from "./new-section-modal/NewSectionModal";
import styles from "./NewPage.module.css";
import { v4 as uuidv4 } from "uuid";

export default function NewPage() {
  const { state } = useContext(NewArticleContext);
  const modalState = useState(false);

  return (
    <div className={styles.new_page}>
      <ComponentEditor id="heading1" />
      <ComponentEditor id="author" />
      <ComponentEditor id="date" />
      <ComponentEditor id="paragraph" />
      {state.sections.map((section, index) => {
        if (section.type === "bulleted") {
          return (
            <div key={uuidv4()}>
              <ComponentEditor
                id="heading2"
                retrievedValue={section.content.heading}
              />
              {section.content.paragraphs.map(({ text }) => (
                <p key={uuidv4()}>{text}</p>
              ))}
              <ul>
                {section.content.items.map((item) => (
                  <li key={uuidv4()}>
                    <h3>{item.heading}</h3>
                    {item.paragraphs.map(({ text }) => (
                      <p key={uuidv4()}>{text}</p>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          );
        }
        if (section.type === "numbered") {
          return (
            <div key={uuidv4()}>
              <h2>{section.content.heading}</h2>
              {section.content.paragraphs.map(({ text }) => (
                <p key={uuidv4()}>{text}</p>
              ))}
              <ol>
                {section.content.items.map((item) => (
                  <li key={uuidv4()}>
                    <h3>{item.heading}</h3>
                    {item.paragraphs.map(({ text }) => (
                      <p key={uuidv4()}>{text}</p>
                    ))}
                  </li>
                ))}
              </ol>
            </div>
          );
        }
        return (
          <div key={uuidv4()}>
            <h2>{section.content.heading}</h2>
            {section.content.paragraphs.map(({ text }) => (
              <p key={uuidv4()}>{text}</p>
            ))}
          </div>
        );
      })}
      <NewSectionModal modalState={modalState} />
      <h2>Summary</h2>
      <ComponentEditor id="paragraph" />
    </div>
  );
}
