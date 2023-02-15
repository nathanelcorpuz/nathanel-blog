import styles from "./ArticlePage.module.css";
import ArticleAuthorDate from "@/components/common/article/article-author-date/ArticleAuthorDate";
import Image from "next/image";
import placeholder3 from "@/public/placeholder/placeholder-3.jpg";
import placeholder4 from "@/public/placeholder/placeholder-4.jpg";
import placeholder5 from "@/public/placeholder/placeholder-5.jpg";
import placeholder6 from "@/public/placeholder/placeholder-6.jpg";
import smiley from "@/public/smiley.png";
import straighty from "@/public/straighty.png";
import ArticlePageSection from "./ArticlePageSection";
import ArticlePreviewSection from "@/components/common/article/article-preview/ArticlePreviewSection";
import ArticlePreview from "@/components/common/article/article-preview/ArticlePreview";

export default function ArticlePage({ article }) {
  const { title, author, dateTime, dateString, imgAlt, description } = article;
  return (
    <>
      <section className={styles.headline}>
        <hgroup>
          <h1 style={{ overflowWrap: "break-word", marginBottom: 10 }}>
            {title}
          </h1>
          <ArticleAuthorDate
            isPreview={false}
            data={{ author, dateTime, dateString }}
          />
        </hgroup>
        <Image src={article.img} alt={imgAlt} />
        <p>{description}</p>
      </section>
      <ArticlePageSection>
        <h3>Sed nisi mi, venenatis sed iaculis eget.</h3>
        <p>
          Etiam eu lacus at metus feugiat facilisis. Phasellus tincidunt orci
          quis ante iaculis tincidunt. Quisque quis sollicitudin felis, sit amet
          porta tortor.
        </p>
        <Image src={placeholder3} alt="test image" />
        <p>
          Aenean ac hendrerit purus, quis varius orci. Quisque imperdiet ex id
          ipsum imperdiet, nec egestas lacus lobortis.
        </p>
      </ArticlePageSection>
      <ArticlePageSection>
        <h3>Morbi scelerisque pellentesque purus quis accumsan</h3>
        <p>
          Nulla non sagittis neque. Duis luctus faucibus nunc, eu pharetra arcu
          luctus sed. Aenean pharetra lorem quis sapien vulputate, in ornare
          augue efficitur. Nunc ac turpis accumsan leo tempor rutrum.
        </p>
        <p>
          Ut vestibulum orci sollicitudin bibendum placerat. Fusce convallis,
          eros a tristique varius, odio nunc fermentum felis, vitae rutrum arcu
          elit sit amet elit.
        </p>
        <ol
          style={{
            padding: "0 20px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <li>Suspendisse quis gravida enim.</li>
          <li>Cras a neque vulputate, vehicula odio aliquam, varius justo.</li>
          <li>Nunc ut pulvinar neque.</li>
        </ol>
      </ArticlePageSection>
      <ArticlePageSection>
        <ol className={styles.ordered_list_section}>
          <li>
            <h3>Suspendisse quis gravida enim.</h3>
            <Image src={placeholder4} alt="test image" />
            <p>
              Donec ac nibh ac neque rhoncus pulvinar ut non eros. Suspendisse
              nec malesuada augue.
            </p>
          </li>
          <li>
            <h3>
              Cras a neque vulputate, vehicula odio aliquam, varius justo.
            </h3>
            <Image src={placeholder5} alt="test image" />
            <p>
              Morbi sagittis congue nisi vel lacinia. Nunc viverra magna eu
              tempor gravida.
            </p>
          </li>
          <li>
            <h3>Nunc ut pulvinar neque.</h3>
            <Image src={placeholder6} alt="test image" />
            <p>
              Nulla vestibulum dictum risus non faucibus. Praesent sed mauris
              efficitur mauris scelerisque mattis. Nunc id metus arcu.
            </p>
          </li>
        </ol>
      </ArticlePageSection>
      <ArticlePageSection>
        <h3 className={styles.summary_title}>Summary</h3>
        <p>
          <em>
            Nullam vel mi ac lorem placerat ultricies aliquam nec justo.
            Praesent pharetra vehicula hendrerit. Integer hendrerit justo in
            enim luctus pharetra. Nulla facilisi. Vivamus cursus at velit eget
            malesuada. Sed porttitor tellus sit amet quam pellentesque faucibus.
          </em>
        </p>
      </ArticlePageSection>
      <ArticlePageSection>
        <p>How did you feel about this article?</p>
        <form className={styles.feedback_form}>
          <button>
            <p>5</p>
            <Image src={smiley} alt="smiley face icon" />
          </button>
          <button>
            <p>5</p>
            <Image src={straighty} alt="straight face icon" />
          </button>
        </form>
      </ArticlePageSection>
      <ArticlePreviewSection>
        <h2>related</h2>
        <ArticlePreview article={article} />
        <ArticlePreview article={article} />
        <button>Show more</button>
      </ArticlePreviewSection>
    </>
  );
}
