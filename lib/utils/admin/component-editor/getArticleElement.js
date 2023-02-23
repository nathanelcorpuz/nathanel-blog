export default function getArticleElement(state, id) {
  let element;

  if (id === "heading") {
    element = <h1>{state}</h1>;
  }

  if (id === "heading2") {
    element = <h2>{state}</h2>;
  }

  if (id === "heading3") {
    element = <h3>{state}</h3>;
  }

  if (id === "heading4") {
    element = <h4>{state}</h4>;
  }

  if (id === "author" || id === "date") {
    element = <small>{state}</small>;
  }

  if (id === "paragraph" || id === "subheading" || id === "summary") {
    element = <p>{state}</p>;
  }
  return element;
}
