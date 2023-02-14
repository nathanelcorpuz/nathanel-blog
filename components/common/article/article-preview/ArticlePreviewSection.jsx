export default function ArticlePreviewSection({ isFeatured, children }) {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 20,
        gap: isFeatured ? 20 : 75,
      }}
    >
      {children}
    </section>
  );
}
