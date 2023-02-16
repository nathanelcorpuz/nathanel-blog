import styles from "./CategoryPage.module.css";
import ArticlePreview from "@/components/common/article/article-preview/ArticlePreview";
import ArticlePreviewSection from "@/components/common/article/article-preview/ArticlePreviewSection";
import { capitalize } from "@/lib/utils/capitalize";
import Head from "next/head";
import ShowMoreBtn from "@/components/common/show-more-btn/ShowMoreBtn";

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
      <h1 className={styles.h1}>{!articles ? "Loading..." : category}</h1>
      {articles && (
        <>
          <ArticlePreviewSection view="category">
            {articles.map((article) => (
              <ArticlePreview key={article.id} article={article} />
            ))}
          </ArticlePreviewSection>
          <ShowMoreBtn style={{ margin: "0 auto" }} />
        </>
      )}
    </>
  );
}
