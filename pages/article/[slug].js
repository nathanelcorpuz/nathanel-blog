import ArticlePage from "@/components/pages/article/ArticlePage";
import { getRelatedArticles } from "@/lib/mock/articles";

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
  const res = await fetch(
    `http://localhost:3000/api/article?slug=${params.slug}`
  );
  const article = await res.json();
  const related = await getRelatedArticles();

  return {
    props: {
      article,
      related,
    },
  };
}
