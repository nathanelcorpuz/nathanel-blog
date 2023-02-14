export default function MainWrapper({ children, styleOverrides = {} }) {
  return (
    <main
      style={{
        paddingTop: "75px",
        display: "flex",
        flexDirection: "column",
        gap: 75,
        ...styleOverrides,
      }}
    >
      {children}
    </main>
  );
}
