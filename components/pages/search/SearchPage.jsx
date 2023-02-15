import ArticlePreview from "@/components/common/article/article-preview/ArticlePreview";
import ArticlePreviewSection from "@/components/common/article/article-preview/ArticlePreviewSection";
import Head from "next/head";

export default function SearchPage({ articles, searchQuery }) {
  const isLoading = !articles && !searchQuery;
  return (
    <>
      <Head>
        <title>Search - Blog - Nathanel Corpuz</title>
      </Head>
      {isLoading ? (
        <h1 style={{ paddingInline: 20 }}>Loading...</h1>
      ) : (
        <>
          <hgroup style={{ paddingInline: 20 }}>
            <h1>Search results</h1>
            <h2
              style={{
                fontSize: "1.3rem",
                letterSpacing: "normal",
                textTransform: "none",
                fontWeight: "normal",
              }}
            >
              for "{searchQuery}"
            </h2>
          </hgroup>
          <>
            <ArticlePreviewSection>
              {articles.map((article) => (
                <ArticlePreview key={article.id} article={article} />
              ))}
            </ArticlePreviewSection>
            <button style={{ margin: "0 20px" }}>Show more</button>
          </>
        </>
      )}
    </>
  );
}
