import styles from "./VisitorLayout.module.css";
import Footer from "./footer/Footer";
import Header from "./header/Header";

export default function VisitorLayout({ children }) {
  return (
    <div className={styles.layout_root}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
