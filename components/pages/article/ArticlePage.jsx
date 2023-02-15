import ArticlePageHeadline from "./headline/ArticlePageHeadline";
import ArticlePageSummary from "./summary/ArticlePageSummary";
import ArticlePageFeedback from "./feedback/ArticlePageFeedback";
import ArticlePageRelated from "./related/ArticlePageRelated";
import ArticlePageMain from "./main/ArticlePageMain";
import Head from "next/head";

export default function ArticlePage({ article }) {
  return (
    <>
      <Head>
        {!article ? (
          <title>Loading article... - Blog - Nathanel Corpuz</title>
        ) : (
          <>
            <title>{article.title} - Blog - Nathanel Corpuz</title>
            <meta name="description" content={article.description} />
          </>
        )}
      </Head>
      {!article ? (
        <h1 style={{ paddingInline: 20 }}>Loading...</h1>
      ) : (
        <>
          <ArticlePageHeadline article={article} />
          <ArticlePageMain />
          <ArticlePageSummary />
          <ArticlePageFeedback />
          <ArticlePageRelated article={article} />
        </>
      )}
    </>
  );
}
