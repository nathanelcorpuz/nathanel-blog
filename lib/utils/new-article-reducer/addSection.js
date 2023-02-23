import { v4 as uuidv4 } from "uuid";

export default function addSection(state, action) {
  const sectionType = action.sectionType;
  const stateClone = JSON.parse(JSON.stringify(state));
  if (sectionType === "standard") {
    stateClone.sections.push({
      id: uuidv4(),
      type: sectionType,
      content: {
        heading: "heading2",
        paragraphs: [
          {
            id: uuidv4(),
            text: "paragraph",
          },
        ],
      },
    });
    return {
      ...stateClone,
    };
  }

  if (sectionType === "numbered" || sectionType === "bulleted") {
    stateClone.sections.push({
      id: uuidv4(),
      type: sectionType,
      content: {
        heading: "heading2",
        paragraphs: [
          {
            id: uuidv4(),
            text: "paragraph",
          },
        ],
        items: [
          {
            id: uuidv4(),
            heading: "heading3",
            paragraphs: [
              {
                id: uuidv4(),
                text: "paragraph",
              },
            ],
          },
        ],
      },
    });
    return {
      ...stateClone,
    };
  }
}
