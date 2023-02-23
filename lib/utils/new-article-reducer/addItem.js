import { v4 as uuidv4 } from "uuid";

export default function addItem(state, action) {
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
