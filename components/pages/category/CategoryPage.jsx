import Article from "@/components/common/article/article-preview/ArticlePreview";
import ArticleSection from "@/components/common/article/article-preview/ArticlePreviewSection";
import { useRouter } from "next/router";

export default function CategoryPage({ articles }) {
  const router = useRouter();
  return (
    <>
      <h1 style={{ textTransform: "capitalize", padding: "0 20px" }}>
        {router.query.category}
      </h1>
      <ArticleSection>
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </ArticleSection>
      <button style={{ margin: "0 20px" }}>Show more</button>
    </>
  );
}
