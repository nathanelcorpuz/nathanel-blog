import styles from "./TestArticlePage.module.css";

export default function TestArticlePage({ article }) {
  console.log(article);
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
            {/* render paragraph objects here */}
            <p>{section.content.paragraph}</p>
          </section>
        ) : (
          <section key={section.id}>
            <h3>{section.content.heading}</h3>
            {/* render paragraph objects here */}
            <p>{section.content.paragraph}</p>
            <ol>
              {section.content.items.map((item) => (
                <li key={item.id}>
                  <h4>{item.heading}</h4>
                  {/* render paragraph objects here */}
                  <p>{item.paragraph}</p>
                </li>
              ))}
            </ol>
          </section>
        )
      )}
      <section aria-label="summary">
        <h3>Summary</h3>
        <p>{article.summary}</p>
      </section>
    </article>
  );
}
