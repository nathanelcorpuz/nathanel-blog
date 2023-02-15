import ArticlePreview from "@/components/common/article/article-preview/ArticlePreview";
import ArticlePreviewSection from "@/components/common/article/article-preview/ArticlePreviewSection";
import { capitalize } from "@/lib/utils/capitalize";
import Head from "next/head";

export default function CategoryPage({ articles, category }) {
  return (
    <>
      <Head>
        <title>
          {!category
            ? "Loading..."
            : `${capitalize(category)} - Blog - Nathanel Corpuz`}
        </title>
      </Head>
      <h1 style={{ textTransform: "capitalize", padding: "0 20px" }}>
        {!articles ? "Loading..." : category}
      </h1>
      {articles && (
        <>
          <ArticlePreviewSection>
            {articles.map((article) => (
              <ArticlePreview key={article.id} article={article} />
            ))}
          </ArticlePreviewSection>
          <button style={{ margin: "0 20px" }}>Show more</button>
        </>
      )}
    </>
  );
}
