import styles from "./ArticlePage.module.css";

export default function ArticlePageSection({ children }) {
  return <section className={styles.section}>{children}</section>;
}
