import ArticlePreview from "@/components/common/article/article-preview/ArticlePreview";
import ArticlePreviewSection from "@/components/common/article/article-preview/ArticlePreviewSection";
import ShowMoreBtn from "@/components/common/show-more-btn/ShowMoreBtn";

export default function ArticlePageRelated({ article }) {
  return (
    <ArticlePreviewSection view="related">
      <h2>related</h2>
      <ArticlePreview article={article} />
      <ArticlePreview article={article} />
      <ShowMoreBtn style={{ margin: 0 }} />
    </ArticlePreviewSection>
  );
}
