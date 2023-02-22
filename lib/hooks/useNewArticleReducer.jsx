import { useReducer } from "react";

class Paragraph {
  constructor(text) {
    this.paragraph = text;
  }
}

class Item {
  constructor(heading, paragraphs) {
    this.heading = heading;
    this.paragraphs = paragraphs; // array of Paragraph objects
  }
}

class Content {
  constructor(heading, paragraphs, items) {
    this.heading = heading;
    this.paragraphs = paragraphs; // array of Paragraph objects
    this.items = items; // array of Item objects
  }
}

class Section {
  constructor(type, content) {
    this.type = type; // standard, numbered, bulleted
    this.content = content;
  }
}

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
      const stateClone = JSON.parse(JSON.stringify(state));
      stateClone.sections.push(action.newSection);
      return {
        ...stateClone,
      };
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
