export default function editParagraph(state, action) {
  const stateClone = JSON.parse(JSON.stringify(state));

  // if section level
  if (action.paragraph.level === "section") {
    // find section through action.sectionId
    const targetSection = stateClone.sections.find(
      (section) => section.id === action.sectionId
    );

    // find paragraph through action.paragraph.id
    const targetParagraph = targetSection.content.paragraphs.find(
      (paragraph) => paragraph.id === action.paragraph.id
    );

    // edit text
    targetParagraph.text = action.newValue;

    // splice targetSection.content.paragraphs with updated paragraph object
    const targetParagraphIndex = targetSection.content.paragraphs.findIndex(
      (paragraph) => paragraph.id === action.paragraph.id
    );
    targetSection.content.paragraphs.splice(
      targetParagraphIndex,
      1,
      targetParagraph
    );

    return { ...stateClone };
  }

  // if item level

  return { ...stateClone };
}
