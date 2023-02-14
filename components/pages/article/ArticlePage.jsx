import MainWrapper from "@/components/common/main-wrapper/MainWrapper";

export default function ArticlePage({ article }) {
  return (
    <MainWrapper>
      <h1>{article.title}</h1>
    </MainWrapper>
  );
}
