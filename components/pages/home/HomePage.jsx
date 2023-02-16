import styles from "./HomePage.module.css";
import ArticlePreviewSection from "@/components/common/article/article-preview/ArticlePreviewSection";
import ShowMoreBtn from "@/components/common/show-more-btn/ShowMoreBtn";
import Article from "../../common/article/article-preview/ArticlePreview";
import { useState } from "react";

export default function HomePage({ articles }) {
  const [moreArticles, setMoreArticles] = useState([]);

  let lastArticleId;

  if (articles) {
    const moreArticlesLastId = moreArticles.length
      ? moreArticles[moreArticles.length - 1].id
      : "";

    const initialAllLastId =
      articles.initialAll[articles.initialAll.length - 1].id;

    lastArticleId = moreArticlesLastId || initialAllLastId;
  }

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
        {articles.initialAll.map((article) => (
          <Article key={article.slug} article={article} />
        ))}
        {moreArticles.map((article) => (
          <Article key={article.slug} article={article} />
        ))}
        <ShowMoreBtn
          onClick={async () => {
            const res = await fetch(
              `http://localhost:3000/api/articles/show-more-all/${lastArticleId}`
            );
            const nextThreeArticles = await res.json();

            setMoreArticles((prevState) => [
              ...prevState,
              ...nextThreeArticles,
            ]);
          }}
        />
      </ArticlePreviewSection>
    </>
  );
}
