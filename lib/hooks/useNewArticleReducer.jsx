import { v4 as uuidv4 } from "uuid";
import { useReducer } from "react";

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
            heading: "Sample heading",
            paragraphs: [
              {
                id: uuidv4(),
                text: "Sample paragraph",
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
            heading: "Sample heading",
            paragraphs: [
              {
                id: uuidv4(),
                text: "Sample paragraph",
              },
            ],
            items: [
              {
                id: uuidv4(),
                heading: "Sample item 1",
                paragraphs: [
                  {
                    id: uuidv4(),
                    text: "Sample item 1 paragraph 1",
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
    case "add_paragraphs": {
      const stateClone = JSON.parse(JSON.stringify(state));
    }
    case "add_items": {
    }
    case "add_tags": {
      const stateClone = JSON.parse(JSON.stringify(state));
      stateClone.tags.push(action.newTag);
      return {
        ...stateClone,
      };
    }
  }
}

export default function useNewArticleReducer() {
  return useReducer(reducer, initialState);
}
