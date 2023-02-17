import ArticlePreview from "@/components/common/article-preview/ArticlePreview";
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
          <hgroup
            style={{ paddingInline: 20, width: "100%", textAlign: "center" }}
          >
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
            {articles.map((article) => (
              <ArticlePreview key={article.id} article={article} />
            ))}
            <button>Show more</button>
          </>
        </>
      )}
    </>
  );
}
