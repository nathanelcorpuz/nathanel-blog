import ArticleAuthorDate from "@/components/common/article/article-author-date/ArticleAuthorDate";
import Image from "next/image";
import styles from "../ArticlePage.module.css";

export default function ArticlePageHeadline({ article }) {
  const { title, author, dateTime, dateString, description, imgAlt } = article;
  return (
    <section className={styles.headline}>
      <hgroup>
        <h1 style={{ overflowWrap: "break-word", marginBottom: 10 }}>
          {title}
        </h1>
        <ArticleAuthorDate
          isPreview={false}
          data={{ author, dateTime, dateString }}
        />
      </hgroup>
      <Image src={article.img} alt={imgAlt} />
      <p>{description}</p>
    </section>
  );
}
