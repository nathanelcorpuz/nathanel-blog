import styles from "../ArticlePage.module.css";
import ArticlePageSection from "../ArticlePageSection";

export default function ArticlePageSummary() {
  return (
    <ArticlePageSection>
      <h3 className={styles.summary_title}>Summary</h3>
      <p>
        <em>
          Nullam vel mi ac lorem placerat ultricies aliquam nec justo. Praesent
          pharetra vehicula hendrerit. Integer hendrerit justo in enim luctus
          pharetra. Nulla facilisi. Vivamus cursus at velit eget malesuada. Sed
          porttitor tellus sit amet quam pellentesque faucibus.
        </em>
      </p>
    </ArticlePageSection>
  );
}
