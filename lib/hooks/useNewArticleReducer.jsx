import { v4 as uuidv4 } from "uuid";
import { useReducer } from "react";
import findNestedObj from "../utils/findNestedObj";
import addParagraph from "../utils/new-article-reducer/addParagraph";
import addItem from "../utils/new-article-reducer/addItem";
import addSection from "../utils/new-article-reducer/addSection";

const initialState = {
  image: {
    key: "",
    alt: "",
    owner: "",
    ownerUrl: "",
  },
  author: {
    name: "author",
    profileUrl: "",
  },
  dates: {
    published: "January 1, 2023",
    edited: "",
  },
  headline: {
    heading: "Heading",
    subheading: "Subheading",
  },
  sections: [],
  summary: "Paragraph",
  tags: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "edit_headline": {
      return {
        ...state,
        headline: {
          ...state.headline,
          [action.headline.element]: action.newValue,
        },
      };
    }
    case "edit_author": {
      return {
        ...state,
        author: {
          ...state.author,
          [action.author.element]: action.newValue,
        },
      };
    }
    case "edit_dates": {
      return {
        ...state,
        dates: {
          ...state.dates,
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
    case "edit_heading2": {
      const stateClone = JSON.parse(JSON.stringify(state));
      const targetSection = stateClone.sections.find(
        (section) => section.id === action.sectionId
      );

      const targetSectionIndex = stateClone.sections.findIndex(
        (section) => section.id === targetSection.id
      );

      targetSection.content.heading = action.newValue;

      console.log("*** targetSection");
      console.log(targetSection);

      stateClone.sections.splice(targetSectionIndex, 1, targetSection);

      console.log("*** stateClone");
      console.log(stateClone);

      return { ...stateClone };
    }
    case "add_section": {
      return addSection(state, action);
    }
    case "add_paragraph": {
      return addParagraph(state, action);
    }
    case "add_item": {
      return addItem(state, action);
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
