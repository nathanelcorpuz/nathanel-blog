export default function editHeading2(state, action) {
  const stateClone = JSON.parse(JSON.stringify(state));
  const targetSection = stateClone.sections.find(
    (section) => section.id === action.sectionId
  );

  const targetSectionIndex = stateClone.sections.findIndex(
    (section) => section.id === targetSection.id
  );

  targetSection.content.heading = action.newValue;

  stateClone.sections.splice(targetSectionIndex, 1, targetSection);

  return { ...stateClone };
}
