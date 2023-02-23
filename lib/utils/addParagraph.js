export default function addParagraph(stateClone, action) {
  if (action.location === "heading2") {
    const targetSection = stateClone.sections.find(
      (section) => section.id === action.sectionId
    );
    targetSection.content.paragraphs.push(action.newParagraph);
    const targetSectionIndex = stateClone.sections.findIndex(
      (section) => section.id === targetSection.id
    );
    stateClone.sections.splice(targetSectionIndex, 1, targetSection);
    return {
      ...stateClone,
    };
  }

  if (action.location === "heading3") {
    const targetSection = stateClone.sections.find(
      (section) => section.id === action.sectionId
    );

    const targetItem = targetSection.content.items.find(
      (item) => item.id === action.itemId
    );
    targetItem.paragraphs.push(action.newParagraph);
    const targetSectionIndex = stateClone.sections.findIndex(
      (section) => section.id === targetSection.id
    );
    const targetItemIndex = targetSection.content.items.findIndex(
      (item) => item.id === targetItem.id
    );
    targetSection.content.items.splice(targetItemIndex, 1, targetItem);
    stateClone.sections.splice(targetSectionIndex, 1, targetSection);
    return {
      ...stateClone,
    };
  }
  return stateClone;
}
