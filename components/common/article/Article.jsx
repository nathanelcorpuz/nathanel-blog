import styles from "./Article.module.css";
import Image from "next/image";

export default function Article({ article }) {
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
        <div className={styles.author_date_container}>
          <p className={styles.author}>{author}</p>
          <time className={styles.publish_date} dateTime={dateTime}>
            {dateString}
          </time>
        </div>
        <h3>{title}</h3>
        <div className={styles.tags_container}>
          {tags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </div>
      </hgroup>
      <p>{description}</p>
    </article>
  );
}
