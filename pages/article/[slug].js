import ArticlePage from "@/components/pages/article/ArticlePage";
import { getArticle } from "@/lib/mock/articles";

export default function Article({ article }) {
  return <ArticlePage article={article} />;
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const article = await getArticle(params.slug);

  return {
    props: {
      article,
    },
  };
}
