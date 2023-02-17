import styles from "./HomePage.module.css";
import ArticlePreview from "@/components/common/article-preview/ArticlePreview";

export default function HomePage({ articles = [] }) {
  const featured = articles[0];
  const latest = articles.slice(12);
  return (
    <div className={styles.wrapper}>
      <section id="featured" className={styles.featured}>
        <h2>Featured</h2>
        <ArticlePreview article={featured} />
      </section>
      <section id="latest" className={styles.latest}>
        <h2>Latest</h2>
        {latest.map((article) => (
          <ArticlePreview key={article.id} article={article} view="latest" />
        ))}
      </section>
      <section id="all" className={styles.all}>
        <h2>All</h2>
        {articles.map((article) => (
          <ArticlePreview key={article.id} article={article} view="all" />
        ))}
        <button>Show more</button>
      </section>
    </div>
  );
}
