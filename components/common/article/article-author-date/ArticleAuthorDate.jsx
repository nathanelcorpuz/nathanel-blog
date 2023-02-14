import styles from "./ArticleAuthorDate.module.css";

export default function ArticleAuthorDate({ data, isPreview = true }) {
  const { author, dateTime, dateString } = data;
  return (
    <div className={styles.author_date_container}>
      <p className={styles.author}>
        {!isPreview && "by"} {author}
      </p>
      <time className={styles.publish_date} dateTime={dateTime}>
        {dateString}
      </time>
    </div>
  );
}
