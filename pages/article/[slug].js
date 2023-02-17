import ArticlePage from "@/components/pages/article/ArticlePage";
import { getArticle, getRelatedArticles } from "@/lib/mock/articles";

export default function Article({ article, related }) {
  return <ArticlePage article={article} related={related} />;
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const article = await getArticle(params.slug);
  const related = await getRelatedArticles();

  return {
    props: {
      article,
      related,
    },
  };
}
