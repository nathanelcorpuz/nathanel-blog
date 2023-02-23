import { v4 as uuidv4 } from "uuid";
import { useReducer } from "react";
import findNestedObj from "../utils/findNestedObj";
import addParagraph from "../utils/addParagraph";

const initialState = {
  image: {
    key: "",
    alt: "",
    owner: "",
    ownerUrl: "",
  },
  author: {
    name: "",
    profileUrl: "",
  },
  dates: {
    published: "",
  },

  headline: {
    heading: "",
    subheading: "",
  },
  sections: [],
  summary: "",
  tags: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "edit_headline": {
      return {
        ...state,
        headline: {
          [action.headline.element]: action.newValue,
        },
      };
    }
    case "edit_author": {
      return {
        ...state,
        author: {
          [action.author.element]: action.newValue,
        },
      };
    }
    case "edit_dates": {
      return {
        ...state,
        dates: {
          [action.dates.element]: action.newValue,
        },
      };
    }
    case "edit_summary": {
      return {
        ...state,
        summary: action.newValue,
      };
    }
    case "add_section": {
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
      throw new Error("Unknown section type...");
    }
    case "add_paragraph": {
      const stateClone = JSON.parse(JSON.stringify(state));
      return addParagraph(stateClone, action);
    }
    case "add_item": {
      // wip
      const stateClone = JSON.parse(JSON.stringify(state));
      const targetSection = stateClone.sections.find(
        (section) => section.id === action.sectionId
      );

      targetSection.content.items.push(action.newItem);

      const targetSectionIndex = stateClone.sections.findIndex(
        (section) => section.id === targetSection.id
      );

      stateClone.sections.splice(targetSectionIndex, 1, targetSection);
      return { ...stateClone };
    }
    case "add_tags": {
      const stateClone = JSON.parse(JSON.stringify(state));
      stateClone.tags.push(action.newTag);
      return {
        ...stateClone,
      };
    }
  }
  return state;
}

export default function useNewArticleReducer() {
  return useReducer(reducer, initialState);
}
