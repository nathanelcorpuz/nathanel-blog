import styles from "./HomePage.module.css";
import ArticleSection from "@/components/common/article/article-preview/ArticlePreviewSection";
import ShowMoreBtn from "@/components/common/show-more-btn/ShowMoreBtn";
import Article from "../../common/article/article-preview/ArticlePreview";

export default function HomePage({ articles }) {
  return (
    <>
      <h1 className={styles.h1}>Nathanel Corpuz Blog</h1>
      <ArticleSection>
        <Article article={articles.featured} />
      </ArticleSection>
      <ArticleSection>
        <h2>Latest</h2>
        {articles.latest.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </ArticleSection>
      <ArticleSection>
        <h2>All</h2>
        {articles.all.map((article) => (
          <Article key={article.id} article={article} />
        ))}
        <ShowMoreBtn />
      </ArticleSection>
    </>
  );
}
