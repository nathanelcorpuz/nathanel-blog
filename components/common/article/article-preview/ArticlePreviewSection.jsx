import styles from "./ArticlePreview.module.css";

export default function ArticlePreviewSection({ children, view = "" }) {
  return (
    <section className={`${styles.article_preview_section} ${styles[view]}`}>
      {children}
    </section>
  );
}
