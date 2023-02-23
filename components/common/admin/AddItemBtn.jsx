import { v4 as uuidv4 } from "uuid";

export default function AddItemBtn({ dispatch, sectionId }) {
  return (
    <button
      onClick={() => {
        dispatch({
          type: "add_item",
          sectionId,
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
  );
}
