import styles from "./HomePage.module.css";
import ArticlePreview from "@/components/common/article-preview/ArticlePreview";

export default function HomePage({ articles = [] }) {
  const featured = articles[0];
  const latest = articles.slice(12);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 100 }}>
      <section id="featured">
        <h1>Nathanel Corpuz Blog</h1>
        <ArticlePreview article={featured} />
      </section>
      <section id="latest">
        <h2 className={styles.section_h2}>Latest</h2>
        {latest.map((article) => (
          <ArticlePreview key={article.id} article={article} />
        ))}
      </section>
      <section id="all">
        <h2 className={styles.section_h2}>All</h2>
        {articles.map((article) => (
          <ArticlePreview key={article.id} article={article} />
        ))}
      </section>
    </div>
  );
}
