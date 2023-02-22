import { format } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./ArticlePreview.module.css";

export default function ArticlePreview({ article, view = "" }) {
  const router = useRouter();
  const src = `http://localhost:3000/api/article/image?key=${article.image.key}`;
  return (
    <article
      className={`${styles.article} ${view ? styles[view] : ""}`}
      onClick={() => router.push(`/article/${article.slug}`)}
    >
      <Image src={src} width={500} height={250} alt={article.image.alt} />
      <hgroup>
        <h2>{article.headline.heading}</h2>
        <address>
          <a href={article.author.profileUrl} rel="author" target="_blank">
            {article.author.name}
          </a>
          <p>
            <time dateTime={article.dates.published}>
              {format(new Date(article.dates.published), "MMMM d, yyyy")}
            </time>
          </p>
        </address>
        <h3>{article.headline.subheading}</h3>
        <aside className={styles.tags}>
          {article.tags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </aside>
      </hgroup>
    </article>
  );
}
