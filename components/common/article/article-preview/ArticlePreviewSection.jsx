import styles from "./ArticlePreview.module.css";

export default function ArticlePreviewSection({ children }) {
  return (
    <section className={styles.article_preview_section}>{children}</section>
  );
}
