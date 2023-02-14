export default function ArticlePageSection({ children }) {
  return (
    <section
      style={{
        padding: "0 20px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {children}
    </section>
  );
}
