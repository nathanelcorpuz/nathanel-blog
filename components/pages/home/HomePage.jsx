import styles from "./HomePage.module.css";
import ArticlePreview from "@/components/common/article-preview/ArticlePreview";
import { useState } from "react";

export default function HomePage({ previews = {} }) {
  const [showMoreResults, setShowMoreResults] = useState({});
  const [allPreviews, setAllPreviews] = useState([...previews.all]);

  return (
    <div className={styles.wrapper}>
      <section id="featured" className={styles.featured}>
        <h2>Featured</h2>
        {!previews ? (
          <p>loading...</p>
        ) : (
          <ArticlePreview article={previews.featured} />
        )}
      </section>
      <section id="latest" className={styles.latest}>
        <h2>Latest</h2>
        {!previews ? (
          <p>loading...</p>
        ) : (
          previews.latest.map((article) => (
            <ArticlePreview key={article._id} article={article} view="latest" />
          ))
        )}
      </section>
      <section id="all" className={styles.all}>
        <h2>All</h2>
        {!previews ? (
          <p>loading...</p>
        ) : (
          allPreviews.map((article) => (
            <ArticlePreview key={article._id} article={article} view="all" />
          ))
        )}
        <button
          onClick={async () => {
            console.log("show more button clicked");
            const res = await fetch(
              `http://localhost:3000/api/test/home-show-more?page=${
                showMoreResults.currentPage + 1
              }`
            );
            const showMoreResponse = await res.json();
            setShowMoreResults(showMoreResponse);
            setAllPreviews((previousPreviews) => [
              ...previousPreviews,
              ...showMoreResponse.articles,
            ]);
          }}
        >
          Show more
        </button>
      </section>
    </div>
  );
}
