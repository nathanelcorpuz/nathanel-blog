import styles from "./ArticlePage.module.css";

export default function ArticlePageSection({ children, style }) {
  return (
    <section className={styles.section} style={style}>
      {children}
    </section>
  );
}
