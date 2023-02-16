import styles from "./HomePage.module.css";
import ArticlePreviewSection from "@/components/common/article/article-preview/ArticlePreviewSection";
import ShowMoreBtn from "@/components/common/show-more-btn/ShowMoreBtn";
import Article from "../../common/article/article-preview/ArticlePreview";

export default function HomePage({ articles }) {
  return (
    <>
      <h1 className={styles.h1}>Nathanel Corpuz Blog</h1>
      <ArticlePreviewSection view="featured">
        <Article article={articles.featured} />
      </ArticlePreviewSection>
      <ArticlePreviewSection view="latest">
        <h2>Latest</h2>
        {articles.latest.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </ArticlePreviewSection>
      <ArticlePreviewSection view="all">
        <h2 className={styles.all_title}>All</h2>
        {articles.all.map((article) =>
          article.id === "article7" ? null : (
            <Article key={article.id} article={article} />
          )
        )}
        <ShowMoreBtn />
      </ArticlePreviewSection>
    </>
  );
}
