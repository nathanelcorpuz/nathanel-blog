import styles from "./Layout.module.css";
import Footer from "./footer/Footer";
import Header from "./header/Header";

export default function Layout({ children }) {
  return (
    <div className={styles.layout_root}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
