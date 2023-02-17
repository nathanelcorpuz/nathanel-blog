import styles from "./ArticlePage.module.css";

export default function ArticlePage({ article }) {
  if (!article) return <p>loading</p>;
  return (
    <article className={styles.article}>
      <header>
        <hgroup>
          <h1>{article.headline.heading}</h1>
          <h2>{article.headline.subheading}</h2>
        </hgroup>
        <address>
          by{" "}
          <a
            href="https://twitter.com/nathanelcorpuz"
            rel="author"
            target="_blank"
          >
            Nathanel Corpuz
          </a>
        </address>
        <p>
          Published:{" "}
          <time dateTime={article.dates.published}>
            {article.dates.published}
          </time>
        </p>
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
              {section.content.items.map((item) => (
                <li key={item.id}>
                  <h4>{item.heading}</h4>
                  <p>{item.paragraph}</p>
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
              {section.content.items.map((item) => (
                <li key={item.id}>
                  <h4>{item.heading}</h4>
                  <p>{item.paragraph}</p>
                  {item.paragraphs.map((paragraph) => (
                    <p key={paragraph.id}>{paragraph.text}</p>
                  ))}
                </li>
              ))}
            </ul>
          </section>
        ) : null
      )}
      <section aria-label="summary">
        <h3>Summary</h3>
        <p>{article.summary}</p>
      </section>
    </article>
  );
}
