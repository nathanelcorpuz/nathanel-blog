import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./ArticlePreview.module.css";

export default function ArticlePreview({ article }) {
  const router = useRouter();
  return (
    <article onClick={() => router.push(`/article/${article.slug}`)}>
      <Image
        style={{ width: "100%", height: "auto" }}
        src={article.img}
        alt={article.imgAlt}
      />
      <hgroup>
        <h2>{article.headline.heading}</h2>
        <address>
          by{" "}
          <a
            href="https://twitter.com/nathanelcorpuz"
            rel="author"
            target="_blank"
          >
            {article.author}
          </a>
          <p>
            Published:{" "}
            <time dateTime={article.dates.published}>
              {article.dates.published}
            </time>
          </p>
        </address>
        <h3>{article.headline.subheading}</h3>
      </hgroup>
      <aside>
        {article.tags.map((tag) => (
          <p key={tag} className={styles.tag}>
            {tag}
          </p>
        ))}
      </aside>
    </article>
  );
}
