export default function HomeSection({ isFeatured, children }) {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 20,
        gap: isFeatured ? 20 : 50,
      }}
    >
      {children}
    </section>
  );
}
