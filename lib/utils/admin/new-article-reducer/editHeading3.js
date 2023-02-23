export default function editHeading3(state, action) {
  const stateClone = JSON.parse(JSON.stringify(state));
  const targetSection = stateClone.sections.find(
    (section) => section.id === action.sectionId
  );

  const targetItem = targetSection.content.items.find(
    (item) => item.id === action.itemId
  );

  const updatedItem = {
    ...targetItem,
    heading: action.newValue,
  };

  const targetSectionIndex = stateClone.sections.findIndex(
    (section) => section.id === targetSection.id
  );

  const targetItemIndex = targetSection.content.items.findIndex(
    (item) => item.id === action.itemId
  );

  targetSection.content.items.splice(targetItemIndex, 1, updatedItem);

  stateClone.sections.splice(targetSectionIndex, 1, targetSection);

  return { ...stateClone };
}
