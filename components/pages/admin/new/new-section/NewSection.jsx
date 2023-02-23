import { v4 as uuidv4 } from "uuid";
import styles from "./NewSection.module.css";
import ComponentEditor from "../component-editor/ComponentEditor";
import { useContext } from "react";
import { NewArticleContext } from "@/contexts/NewArticleContext";
import AddItemBtn from "@/components/common/admin/AddItemBtn";
import DeleteSectionBtn from "./delete-section-btn/DeleteSectionBtn";

export default function NewSection({ section, type }) {
  const { dispatch } = useContext(NewArticleContext);
  const { id: sectionId } = section;
  return (
    <div key={sectionId} className={styles.section}>
      <ComponentEditor
        id="heading2"
        state={section.content.heading}
        sectionId={sectionId}
      />
      {section.content.paragraphs.map(({ text, id: paragraphId }) => (
        <div key={paragraphId} className={styles.paragraph}>
          <ComponentEditor
            id="paragraph"
            state={text}
            sectionId={sectionId}
            paragraphId={paragraphId}
          />
          <button
            onClick={() => {
              dispatch({ type: "delete_paragraph", paragraphId, sectionId });
            }}
          >
            x
          </button>
        </div>
      ))}
      <button
        className={styles.add_paragraph_btn}
        onClick={() =>
          dispatch({
            type: "add_paragraph",
            location: "heading2",
            sectionId,
            newParagraph: { id: uuidv4(), text: "paragraph" },
          })
        }
      >
        Add paragraph
      </button>
      {type === "numbered" && (
        <ol className={styles.items}>
          {section.content.items.map(({ heading, paragraphs, id: itemId }) => (
            <li key={itemId}>
              <ComponentEditor
                id="heading3"
                state={heading}
                sectionId={sectionId}
                itemId={itemId}
              />
              {paragraphs.map(({ text, id: paragraphId }) => (
                <div key={paragraphId} className={styles.paragraph}>
                  <ComponentEditor
                    id="paragraph"
                    state={text}
                    sectionId={sectionId}
                    itemId={itemId}
                    paragraphId={paragraphId}
                  />
                  <button
                    onClick={() => {
                      dispatch({
                        type: "delete_paragraph",
                        paragraphId,
                        itemId,
                        sectionId,
                      });
                    }}
                  >
                    x
                  </button>
                </div>
              ))}
              <button
                className={styles.add_paragraph_btn}
                onClick={() =>
                  dispatch({
                    type: "add_paragraph",
                    location: "heading3",
                    sectionId,
                    itemId,
                    newParagraph: { id: uuidv4(), text: "paragraph" },
                  })
                }
              >
                Add paragraph
              </button>
            </li>
          ))}
          <AddItemBtn dispatch={dispatch} sectionId={sectionId} />
        </ol>
      )}
      {type === "bulleted" && (
        <ul className={styles.items}>
          {section.content.items.map(({ heading, paragraphs, id: itemId }) => (
            <li key={itemId}>
              <ComponentEditor
                id="heading3"
                state={heading}
                sectionId={sectionId}
                itemId={itemId}
              />
              {paragraphs.map(({ text, id: paragraphId }) => (
                <div key={paragraphId} className={styles.paragraph}>
                  <ComponentEditor
                    id="paragraph"
                    state={text}
                    sectionId={sectionId}
                    itemId={itemId}
                    paragraphId={paragraphId}
                  />
                  <button
                    onClick={() => {
                      dispatch({
                        type: "delete_paragraph",
                        paragraphId,
                        itemId,
                        sectionId,
                      });
                    }}
                  >
                    x
                  </button>
                </div>
              ))}
              <button
                className={styles.add_paragraph_btn}
                onClick={() =>
                  dispatch({
                    type: "add_paragraph",
                    location: "heading3",
                    sectionId,
                    itemId,
                    newParagraph: { id: uuidv4(), text: "paragraph" },
                  })
                }
              >
                Add paragraph
              </button>
            </li>
          ))}
          <AddItemBtn dispatch={dispatch} sectionId={sectionId} />
        </ul>
      )}
      <DeleteSectionBtn sectionId={sectionId} />
    </div>
  );
}
