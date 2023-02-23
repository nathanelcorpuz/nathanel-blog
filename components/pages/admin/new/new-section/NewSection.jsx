import { v4 as uuidv4 } from "uuid";
import styles from "./NewSection.module.css";
import ComponentEditor from "../component-editor/ComponentEditor";
import { useContext } from "react";
import { NewArticleContext } from "@/contexts/NewArticleContext";

export default function NewSection({ section, type }) {
  const { dispatch } = useContext(NewArticleContext);
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
      <button
        className={styles.add_paragraph_btn}
        onClick={() =>
          dispatch({
            type: "add_paragraph",
            location: "heading2",
            sectionId: section.id,
            newParagraph: { id: uuidv4(), text: "Sample paragraph" },
          })
        }
      >
        Add paragraph
      </button>
      {type === "numbered" && (
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
              <button
                className={styles.add_paragraph_btn}
                onClick={() =>
                  dispatch({
                    type: "add_paragraph",
                    location: "heading3",
                    sectionId: section.id,
                    itemId: id,
                    newParagraph: { id: uuidv4(), text: "Sample paragraph" },
                  })
                }
              >
                Add paragraph
              </button>
              <button
                onClick={() => {
                  dispatch({
                    type: "add_item",
                    sectionId: section.id,
                    listId: id,
                    newItem: {
                      id: uuidv4(),
                      heading: "heading3",
                      paragraphs: [
                        {
                          id: uuidv4(),
                          text: "paragraph",
                        },
                      ],
                    },
                  });
                }}
              >
                Add item
              </button>
            </li>
          ))}
        </ol>
      )}
      {type === "bulleted" && (
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
              <button
                className={styles.add_paragraph_btn}
                onClick={() =>
                  dispatch({
                    type: "add_paragraph",
                    location: "heading3",
                    sectionId: section.id,
                    itemId: id,
                    newParagraph: { id: uuidv4(), text: "Sample paragraph" },
                  })
                }
              >
                Add paragraph
              </button>
              <button
                onClick={() => {
                  dispatch({
                    type: "add_item",
                    sectionId: section.id,
                    listId: id,
                    newItem: {
                      id: uuidv4(),
                      heading: "heading3",
                      paragraphs: [
                        {
                          id: uuidv4(),
                          text: "paragraph",
                        },
                      ],
                    },
                  });
                }}
              >
                Add item
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
