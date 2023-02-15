import styles from "./ArticlePreview.module.css";
import Image from "next/image";
import ArticleAuthorDate from "../article-author-date/ArticleAuthorDate";
import { useRouter } from "next/router";

export default function ArticlePreview({ article }) {
  const {
    slug,
    img,
    alt = "placeholder image",
    author,
    dateString,
    dateTime,
    title,
    tags,
    description,
  } = article;

  const router = useRouter();
  return (
    <article
      aria-label="clickable article preview"
      aria-roledescription="clickable article preview"
      onClick={() => router.push({ pathname: `/article/${slug}` })}
      className={styles.article_preview}
    >
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
