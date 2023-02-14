import Article from "@/components/common/article-preview/ArticlePreview";
import ArticleSection from "@/components/common/article-preview/ArticlePreviewSection";
import MainWrapper from "@/components/common/main-wrapper/MainWrapper";
import getArticles from "@/lib/mock/articles";

const articles = getArticles();

export default function CategoryPage({ category }) {
  return (
    <MainWrapper>
      <h1 style={{ textTransform: "capitalize", padding: "0 20px" }}>
        {category}
      </h1>
      <ArticleSection>
        {articles.all.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </ArticleSection>
      <button style={{ margin: "0 20px" }}>Show more</button>
    </MainWrapper>
  );
}
