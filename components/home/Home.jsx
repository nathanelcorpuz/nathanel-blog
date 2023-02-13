import getArticles from "@/lib/mock/articles";
import Article from "../common/article/Article";
import HomeSection from "./HomeSection";

const articles = getArticles();

export default function Home() {
  return (
    <>
      <HomeSection isFeatured>
        <h1>Nathanel Corpuz Blog</h1>
        <Article article={articles.featured} />
      </HomeSection>
      <HomeSection>
        <h2>Latest</h2>
        {articles.latest.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </HomeSection>
      <HomeSection>
        <h2>All</h2>
        {articles.all.map((article) => (
          <Article key={article.id} article={article} />
        ))}
        <button>Show more</button>
      </HomeSection>
    </>
  );
}
