import { v4 as uuidv4 } from "uuid";
import styles from "./NewSection.module.css";
import ComponentEditor from "../component-editor/ComponentEditor";
import { useContext } from "react";
import { NewArticleContext } from "@/contexts/NewArticleContext";
import AddItemBtn from "@/components/common/admin/AddItemBtn";

export default function NewSection({ section, type }) {
  const { dispatch } = useContext(NewArticleContext);
  return (
    <div key={section.id}>
      <ComponentEditor
        id="heading2"
        state={section.content.heading}
        sectionId={section.id}
      />
      {section.content.paragraphs.map(({ text, id: paragraphId }) => (
        <ComponentEditor
          key={paragraphId}
          id="paragraph"
          state={text}
          sectionId={section.id}
          paragraphId={paragraphId}
        />
      ))}
      <button
        className={styles.add_paragraph_btn}
        onClick={() =>
          dispatch({
            type: "add_paragraph",
            location: "heading2",
            sectionId: section.id,
            newParagraph: { id: uuidv4(), text: "paragraph" },
          })
        }
      >
        Add paragraph
      </button>
      {type === "numbered" && (
        <ol>
          {section.content.items.map(({ heading, paragraphs, id: itemId }) => (
            <li key={itemId}>
              <ComponentEditor
                id="heading3"
                state={heading}
                sectionId={section.id}
              />
              {paragraphs.map(({ text, id: paragraphId }) => (
                <ComponentEditor
                  key={paragraphId}
                  id="paragraph"
                  state={text}
                  sectionId={section.id}
                  level="item"
                />
              ))}
              <button
                className={styles.add_paragraph_btn}
                onClick={() =>
                  dispatch({
                    type: "add_paragraph",
                    location: "heading3",
                    sectionId: section.id,
                    itemId,
                    newParagraph: { id: uuidv4(), text: "paragraph" },
                  })
                }
              >
                Add paragraph
              </button>
            </li>
          ))}
          <AddItemBtn dispatch={dispatch} sectionId={section.id} />
        </ol>
      )}
      {type === "bulleted" && (
        <ul>
          {section.content.items.map(({ heading, paragraphs, id: itemId }) => (
            <li key={itemId}>
              <ComponentEditor
                id="heading3"
                state={heading}
                sectionId={section.id}
              />
              {paragraphs.map(({ text, id: paragraphId }) => (
                <ComponentEditor
                  key={id}
                  id="paragraph"
                  state={text}
                  sectionId={section.id}
                  itemId={paragraphId}
                />
              ))}
              <button
                className={styles.add_paragraph_btn}
                onClick={() =>
                  dispatch({
                    type: "add_paragraph",
                    location: "heading3",
                    sectionId: section.id,
                    itemId,
                    newParagraph: { id: uuidv4(), text: "paragraph" },
                  })
                }
              >
                Add paragraph
              </button>
            </li>
          ))}
          <AddItemBtn dispatch={dispatch} sectionId={section.id} />
        </ul>
      )}
    </div>
  );
}
