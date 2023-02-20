import placeholderImg from "@/public/placeholder/placeholder-1.jpg";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./ArticlePreview.module.css";

export default function ArticlePreview({ article, view = "" }) {
  const router = useRouter();
  return (
    <article
      className={`${styles.article} ${view ? styles[view] : ""}`}
      onClick={() => router.push(`/article/${article.slug}`)}
    >
      <Image src={placeholderImg} alt={article.imgAlt} />
      <hgroup>
        <h2>{article.headline.heading}</h2>
        <address>
          <a
            href="https://twitter.com/nathanelcorpuz"
            rel="author"
            target="_blank"
          >
            {article.author}
          </a>
          <p>
            <time dateTime={article.dates.published}>
              {article.dates.published}
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
