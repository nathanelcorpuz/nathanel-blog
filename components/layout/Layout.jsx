import Footer from "./footer/Footer";
import Header from "./header/Header";

export default function Layout({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
}
