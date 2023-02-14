import styles from "./ArticlePreview.module.css";
import Image from "next/image";
import ArticleAuthorDate from "../article-author-date/ArticleAuthorDate";

export default function ArticlePreview({ article }) {
  const {
    img,
    alt = "placeholder image",
    author,
    dateString,
    dateTime,
    title,
    tags,
    description,
  } = article;
  return (
    <article className={styles.article}>
      <Image className={styles.cover} src={img} alt={alt} />
      <hgroup>
        <ArticleAuthorDate data={{ author, dateString, dateTime }} />
        <h3>{title}</h3>
        <div className={styles.tags_container}>
          {tags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </div>
      </hgroup>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
