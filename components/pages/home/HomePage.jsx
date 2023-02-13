import ArticleSection from "@/components/common/article/ArticleSection";
import getArticles from "@/lib/mock/articles";
import Article from "../../common/article/Article";

const articles = getArticles();

export default function HomePage() {
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
