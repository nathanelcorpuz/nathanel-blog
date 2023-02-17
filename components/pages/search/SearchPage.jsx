import styles from "./SearchPage.module.css";
import ArticlePreview from "@/components/common/article-preview/ArticlePreview";
import Head from "next/head";

export default function SearchPage({ articles, searchQuery }) {
  const isLoading = !articles && !searchQuery;
  return (
    <>
      <Head>
        <title>Search - Blog - Nathanel Corpuz</title>
      </Head>
      <div className={styles.wrapper}>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <hgroup>
              <h1 className={styles.h1}>Search results</h1>
              <h2>
                for <em>"{searchQuery}"</em>
              </h2>
            </hgroup>
            {articles.map((article) => (
              <ArticlePreview
                key={article.id}
                article={article}
                view="category"
              />
            ))}
            <button>Show more</button>
          </>
        )}
      </div>
    </>
  );
}
