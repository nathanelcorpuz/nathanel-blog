import ArticleSection from "@/components/common/article/article-preview/ArticlePreviewSection";
import Article from "../../common/article/article-preview/ArticlePreview";

export default function HomePage({ articles }) {
  return (
    <>
      <ArticleSection isFeatured>
        <h1>Nathanel Corpuz Blog</h1>
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
        <button>Show more</button>
      </ArticleSection>
    </>
  );
}
