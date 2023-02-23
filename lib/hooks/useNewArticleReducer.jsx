import { useReducer } from "react";
import addParagraph from "../utils/admin/new-article-reducer/addParagraph";
import addItem from "../utils/admin/new-article-reducer/addItem";
import addSection from "../utils/admin/new-article-reducer/addSection";
import editHeading2 from "../utils/admin/new-article-reducer/editHeading2";
import editParagraph from "../utils/admin/new-article-reducer/editParagraph";
import editHeading3 from "../utils/admin/new-article-reducer/editHeading3";
import deleteSection from "../utils/admin/new-article-reducer/deleteSection";
import deleteParagraph from "../utils/admin/new-article-reducer/deleteParagraph";
import deleteItem from "../utils/admin/new-article-reducer/deleteItem";

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
      return editHeading2(state, action);
    }
    case "edit_heading3": {
      return editHeading3(state, action);
    }
    case "edit_paragraph": {
      return editParagraph(state, action);
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
    case "delete_section": {
      return deleteSection(state, action);
    }
    case "delete_paragraph": {
      return deleteParagraph(state, action);
    }
    case "delete_item": {
      return deleteItem(state, action);
    }
  }
  return state;
}

export default function useNewArticleReducer() {
  return useReducer(reducer, initialState);
}
