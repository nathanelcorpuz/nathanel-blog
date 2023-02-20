import styles from "./CategoryPage.module.css";
import { capitalize } from "@/lib/utils/capitalize";
import Head from "next/head";
import ArticlePreview from "@/components/common/article-preview/ArticlePreview";

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
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>{!articles ? "Loading..." : category}</h1>
        {articles && (
          <>
            {articles.map((article) => (
              <ArticlePreview
                key={article._id}
                article={article}
                view="category"
              />
            ))}
            {/* <button>Show more</button> */}
          </>
        )}
      </div>
    </>
  );
}
