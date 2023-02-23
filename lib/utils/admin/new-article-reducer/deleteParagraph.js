export default function deleteParagraph(state, action) {
  const stateClone = JSON.parse(JSON.stringify(state));
  const targetSection = stateClone.sections.find(
    (section) => section.id === action.sectionId
  );

  if (action.itemId) {
    console.log("delete paragraph action with item id");
    const targetItem = targetSection.content.items.find(
      (item) => item.id === action.itemId
    );

    const newParagraphs = targetItem.paragraphs.filter(
      (paragraph) => paragraph.id !== action.paragraphId
    );

    if (newParagraphs.length === 0) {
      return { ...stateClone };
    }

    const newItem = {
      ...targetItem,
      paragraphs: [...newParagraphs],
    };

    const newItems = targetSection.content.items.map((item) => {
      if (item.id === newItem.id) {
        return newItem;
      }
      return item;
    });

    const newSection = {
      ...targetSection,
      content: {
        ...targetSection.content,
        items: [...newItems],
      },
    };

    const newSections = stateClone.sections.map((section) => {
      if (section.id === newSection.id) {
        return newSection;
      }
      return section;
    });

    return { ...stateClone, sections: [...newSections] };
  }

  const newParagraphs = targetSection.content.paragraphs.filter(
    (paragraph) => paragraph.id !== action.paragraphId
  );

  if (newParagraphs.length === 0) {
    return { ...stateClone };
  }

  const newSection = {
    ...targetSection,
    content: {
      ...targetSection.content,
      paragraphs: [...newParagraphs],
    },
  };

  const newSections = stateClone.sections.map((section) => {
    if (section.id === newSection.id) {
      return newSection;
    }
    return section;
  });

  return { ...stateClone, sections: [...newSections] };
}
