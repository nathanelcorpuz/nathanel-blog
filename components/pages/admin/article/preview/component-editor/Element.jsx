export default function Element({ children, id, ...props }) {
  if (id === "heading") {
    return <h1>{children}</h1>;
  }

  if (id === "heading2") {
    return <h2>{children}</h2>;
  }

  if (id === "heading3") {
    return <h3>{children}</h3>;
  }

  if (id === "heading4") {
    return <h4>{children}</h4>;
  }

  if (id === "author" || id === "date") {
    return <small>{children}</small>;
  }

  if (id === "paragraph" || id === "subheading" || id === "summary") {
    return <p>{children}</p>;
  }
}
