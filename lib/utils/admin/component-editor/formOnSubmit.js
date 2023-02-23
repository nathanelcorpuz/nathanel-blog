export default function formOnSubmit(
  dispatch,
  value,
  id,
  paragraphId,
  sectionId,
  itemId
) {
  if (id === "heading" || id === "subheading") {
    dispatch({
      type: "edit_headline",
      headline: { element: id },
      newValue: value || id,
    });
    return;
  }
  if (id === "author") {
    dispatch({
      type: "edit_author",
      author: { element: "name" },
      newValue: value || id,
    });
  }
  if (id === "date") {
    dispatch({
      type: "edit_dates",
      dates: { element: "published" },
      newValue: value || id,
    });
  }
  if (id === "heading2") {
    dispatch({
      type: "edit_heading2",
      sectionId,
      newValue: value || id,
    });
  }
  if (id === "paragraph") {
    dispatch({
      type: "edit_paragraph",
      sectionId,
      itemId,
      newValue: value || id,
      paragraph: {
        level: itemId ? "item" : "section",
        id: paragraphId,
      },
    });
  }
  if (id === "heading3") {
    dispatch({
      type: "edit_heading3",
      sectionId,
      itemId,
      newValue: value || id,
    });
  }
  if (id === "summary") {
    dispatch({
      type: "edit_summary",
      newValue: value,
    });
  }
}
