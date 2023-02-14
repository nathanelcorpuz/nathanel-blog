export default function MainWrapper({ children }) {
  return (
    <main
      style={{
        paddingTop: "75px",
        display: "flex",
        flexDirection: "column",
        gap: 75,
      }}
    >
      {children}
    </main>
  );
}
