export default function deleteSection(state, action) {
  const stateClone = JSON.parse(JSON.stringify(state));
  const updatedSections = stateClone.sections.filter(
    (section) => section.id !== action.sectionId
  );

  return {
    ...stateClone,
    sections: [...updatedSections],
  };
}
