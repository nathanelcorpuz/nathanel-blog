const sectionFinder = (state, action) =>
  state.sections.find((section) => section.id === action.sectionId);

const itemFinder = (section, action) =>
  section.content.items.find((item) => item.id === action.itemId);

const paragraphFinder = (paragraphs, action) =>
  paragraphs.find((paragraph) => paragraph.id === action.paragraph.id);

export default function editParagraph(state, action) {
  const stateClone = JSON.parse(JSON.stringify(state));
  const targetSection = sectionFinder(stateClone, action);

  if (action.paragraph.level === "section") {
    console.log("paragraph level = section");
    const targetParagraph = paragraphFinder(
      targetSection.content.paragraphs,
      action
    );

    const updatedParagraph = {
      ...targetParagraph,
      text: action.newValue,
    };

    const targetParagraphIndex = targetSection.content.paragraphs.findIndex(
      (paragraph) => paragraph.id === action.paragraph.id
    );
    targetSection.content.paragraphs.splice(
      targetParagraphIndex,
      1,
      updatedParagraph
    );

    return { ...stateClone };
  }

  if (action.paragraph.level === "item") {
    const targetItem = itemFinder(targetSection, action);

    const targetParagraph = paragraphFinder(targetItem.paragraphs, action);

    const updatedParagraph = {
      ...targetParagraph,
      text: action.newValue,
    };

    const targetParagraphIndex = targetItem.paragraphs.findIndex(
      (paragraph) => paragraph.id === action.paragraph.id
    );

    const targetItemIndex = targetSection.content.items.findIndex(
      (item) => item.id === action.itemId
    );

    targetItem.paragraphs.splice(targetParagraphIndex, 1, updatedParagraph);

    targetSection.content.items.splice(targetItemIndex, 1, targetItem);

    return { ...stateClone };
  }

  return { ...stateClone };
}
