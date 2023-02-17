import Image from "next/image";
import styles from "./ArticlePage.module.css";
import smiley from "@/public/smiley.png";
import straighty from "@/public/straighty.png";
import ArticlePreview from "@/components/common/article-preview/ArticlePreview";

export default function ArticlePage({ article, related = [] }) {
  if (!article) return <p>loading</p>;
  return (
    <article className={styles.article}>
      <header>
        <hgroup>
          <h1>{article.headline.heading}</h1>
          <address>
            <a
              href="https://twitter.com/nathanelcorpuz"
              rel="author"
              target="_blank"
            >
              Nathanel Corpuz
            </a>
            <p>
              <time dateTime={article.dates.published}>
                {article.dates.published}
              </time>
            </p>
          </address>
          <h2>{article.headline.subheading}</h2>
        </hgroup>
      </header>
      {article.sections.map((section) =>
        section.type === "standard" ? (
          <section key={section.id}>
            <h3>{section.content.heading}</h3>
            {section.content.paragraphs.map((paragraph) => (
              <p key={paragraph.id}>{paragraph.text}</p>
            ))}
          </section>
        ) : section.type === "numbered_list" ? (
          <section key={section.id}>
            <h3>{section.content.heading}</h3>
            {section.content.paragraphs.map((paragraph) => (
              <p key={paragraph.id}>{paragraph.text}</p>
            ))}
            <ol>
              {section.content.items.map((item, index) => (
                <li key={item.id}>
                  <h4>
                    {index + 1}. {item.heading}
                  </h4>
                  {item.paragraphs.map((paragraph) => (
                    <p key={paragraph.id}>{paragraph.text}</p>
                  ))}
                </li>
              ))}
            </ol>
          </section>
        ) : section.type === "bulleted_list" ? (
          <section key={section.id}>
            <h3>{section.content.heading}</h3>
            {section.content.paragraphs.map((paragraph) => (
              <p key={paragraph.id}>{paragraph.text}</p>
            ))}
            <ul>
              {section.content.items.map((item, index) => (
                <li key={item.id}>
                  <h4>
                    {index + 1}. {item.heading}
                  </h4>
                  {item.paragraphs.map((paragraph) => (
                    <p key={paragraph.id}>{paragraph.text}</p>
                  ))}
                </li>
              ))}
            </ul>
          </section>
        ) : null
      )}
      <section aria-label="summary" className={styles.summary}>
        <h3>Summary</h3>
        <p>{article.summary}</p>
      </section>
      <section id="feedback" className={styles.feedback}>
        <button aria-roledescription="button to indicate positive feedback about the article above">
          <Image src={smiley} alt="a smiley face icon" />
          <span>5</span>
        </button>
        <button aria-roledescription="button to indicate negative feedback about the article above">
          <Image src={straighty} alt="a straight face icon" />
          <span>5</span>
        </button>
      </section>
      <aside id="related" className={styles.related}>
        <h3>Related</h3>
        {!related.length
          ? null
          : related.map((article) => (
              <ArticlePreview
                key={article.id}
                article={article}
                view="related"
              />
            ))}
        <div>
          <button>Show more</button>
        </div>
      </aside>
    </article>
  );
}
