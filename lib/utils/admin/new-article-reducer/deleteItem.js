export default function deleteItem(state, action) {
  const targetSection = state.sections.find(
    (section) => section.id === action.sectionId
  );

  const targetItem = targetSection.content.items.find(
    (item) => item.id === action.itemId
  );

  const newItems = targetSection.content.items.filter(
    (item) => item.id !== targetItem.id
  );

  if (newItems.length === 0) {
    return { ...state };
  }

  const newSection = {
    ...targetSection,
    content: {
      ...targetSection.content,
      items: [...newItems],
    },
  };

  const newSections = state.sections.map((section) => {
    if (section.id === newSection.id) {
      return newSection;
    }
    return section;
  });

  return { ...state, sections: [...newSections] };
}
