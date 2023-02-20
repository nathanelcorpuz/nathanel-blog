import Image from "next/image";
import styles from "./ArticlePage.module.css";
import smiley from "@/public/smiley.png";
import straighty from "@/public/straighty.png";
import ArticlePreview from "@/components/common/article-preview/ArticlePreview";
import DOMPurify from "isomorphic-dompurify";
import { format } from "date-fns";
import { useState } from "react";

const purifier = (HTMLString) => DOMPurify.sanitize(HTMLString);

export default function ArticlePage({ article = {}, related = [] }) {
  if (!article || !related.length) return <h1>loading</h1>;

  const [feedback, setFeedback] = useState({
    likes: article.likes,
    dislikes: article.dislikes,
    voted: false,
  });

  const processUserFeedback = async ({ isLiked }) => {
    const requestBody = {
      id: article._id,
      isLiked,
    };
    const res = await fetch("http://localhost:3000/api/test/feedback", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    const feedbackResponse = await res.json();
    setFeedback((prevFeedback) => {
      const clone = JSON.parse(JSON.stringify(prevFeedback));
      const prevFeedbackClone = { ...clone, voted: true };
      if (feedbackResponse.isLiked) {
        return { ...prevFeedbackClone, likes: ++prevFeedbackClone.likes };
      } else {
        return { ...prevFeedbackClone, dislikes: ++prevFeedbackClone.dislikes };
      }
    });
  };

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
              {article.author}
            </a>
            <p>
              <time dateTime={article.dates.published}>
                {format(new Date(article.dates.published), "MMMM d, yyyy")}
              </time>
            </p>
          </address>
          <h2
            dangerouslySetInnerHTML={{
              __html: purifier(article.headline.subheading),
            }}
          />
        </hgroup>
      </header>
      {article.sections.map((section) =>
        section.type === "standard" ? (
          <section key={section._id}>
            <h3>{section.content.heading}</h3>
            {(section.content.paragraphs || []).map((paragraph) => (
              <p
                key={paragraph._id}
                dangerouslySetInnerHTML={{ __html: purifier(paragraph.text) }}
              />
            ))}
          </section>
        ) : section.type === "numbered_list" ? (
          <section key={section._id}>
            <h3>{section.content.heading}</h3>
            {(section.content.paragraphs || []).map((paragraph) => (
              <p
                key={paragraph._id}
                dangerouslySetInnerHTML={{ __html: purifier(paragraph.text) }}
              />
            ))}
            <ol>
              {section.content.items.map((item, index) => (
                <li key={item._id}>
                  <h4>
                    {index + 1}. {item.heading}
                  </h4>
                  {item.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph._id}
                      dangerouslySetInnerHTML={{
                        __html: purifier(paragraph.text),
                      }}
                    />
                  ))}
                </li>
              ))}
            </ol>
          </section>
        ) : section.type === "bulleted_list" ? (
          <section key={section._id}>
            <h3>{section.content.heading}</h3>
            {(section.content.paragraphs || []).map((paragraph) => (
              <p
                key={paragraph._id}
                dangerouslySetInnerHTML={{ __html: purifier(paragraph.text) }}
              />
            ))}
            <ul>
              {section.content.items.map((item, index) => (
                <li key={item._id}>
                  <h4>• {item.heading}</h4>
                  {item.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph._id}
                      dangerouslySetInnerHTML={{
                        __html: purifier(paragraph.text),
                      }}
                    />
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
        {feedback.voted ? (
          <p>
            Thank you for your vote! Feel free to send me an email if you want
            to send me your thoughts via{" "}
            <a href="mailto:nathanelwebdesign@gmail.com">
              nathanelwebdesign@gmail.com
            </a>
          </p>
        ) : (
          <>
            <button
              onClick={() => processUserFeedback({ isLiked: true })}
              aria-roledescription="button to like article"
            >
              <Image src={smiley} alt="a smiley face icon" />
              <span>{feedback.likes}</span>
            </button>
            <button
              onClick={() => processUserFeedback({ isLiked: false })}
              aria-roledescription="button to dislike article"
            >
              <Image src={straighty} alt="a straight face icon" />
              <span>{feedback.dislikes}</span>
            </button>
          </>
        )}
      </section>
      <aside id="related" className={styles.related}>
        <h3>Related</h3>
        {!related.length
          ? null
          : related.map((article) => (
              <ArticlePreview
                key={article._id}
                article={article}
                view="related"
              />
            ))}
        {/* <div>
          <button>Show more</button>
        </div> */}
      </aside>
    </article>
  );
}
