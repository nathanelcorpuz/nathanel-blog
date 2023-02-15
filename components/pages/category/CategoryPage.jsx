import Article from "@/components/common/article/article-preview/ArticlePreview";
import ArticleSection from "@/components/common/article/article-preview/ArticlePreviewSection";

export default function CategoryPage({ category }) {
  return (
    <>
      <h1 style={{ textTransform: "capitalize", padding: "0 20px" }}>
        {category}
      </h1>
      {/* <ArticleSection>
        {articles.all.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </ArticleSection> */}
      <button style={{ margin: "0 20px" }}>Show more</button>
    </>
  );
}
