import { NewArticleContext } from "@/contexts/NewArticleContext";
import { useContext, useState } from "react";
import ComponentEditor from "./component-editor/ComponentEditor";
import NewSectionModal from "./new-section-modal/NewSectionModal";
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
            <div key={section.id}>
              <ComponentEditor
                id="heading2"
                retrievedValue={section.content.heading}
                stateId={section.id}
              />

              {section.content.paragraphs.map(({ text, id }) => (
                <ComponentEditor
                  key={id}
                  id="paragraph"
                  retrievedValue={text}
                  stateId={id}
                />
              ))}
              <ul>
                {section.content.items.map(({ heading, paragraphs, id }) => (
                  <li key={id}>
                    <ComponentEditor
                      id="heading3"
                      retrievedValue={heading}
                      stateId={id}
                    />
                    {paragraphs.map(({ text, id }) => (
                      <ComponentEditor
                        key={id}
                        id="paragraph"
                        retrievedValue={text}
                        stateId={id}
                      />
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          );
        }
        if (section.type === "numbered") {
          return (
            <div key={section.id}>
              <ComponentEditor
                id="heading2"
                retrievedValue={section.content.heading}
                stateId={section.id}
              />

              {section.content.paragraphs.map(({ text, id }) => (
                <ComponentEditor
                  key={id}
                  id="paragraph"
                  retrievedValue={text}
                  stateId={id}
                />
              ))}
              <ol>
                {section.content.items.map(({ heading, paragraphs, id }) => (
                  <li key={id}>
                    <ComponentEditor
                      id="heading3"
                      retrievedValue={heading}
                      stateId={id}
                    />
                    {paragraphs.map(({ text, id }) => (
                      <ComponentEditor
                        key={id}
                        id="paragraph"
                        retrievedValue={text}
                        stateId={id}
                      />
                    ))}
                  </li>
                ))}
              </ol>
            </div>
          );
        }
        return (
          <div key={section.id}>
            <ComponentEditor
              id="heading2"
              retrievedValue={section.content.heading}
              stateId={section.id}
            />
            {section.content.paragraphs.map(({ text, id }) => (
              <ComponentEditor
                key={id}
                id="paragraph"
                retrievedValue={text}
                stateId={id}
              />
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
