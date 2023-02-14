import ArticlePage from "@/components/pages/article/ArticlePage";
import { getArticle } from "@/lib/mock/articles";

export default function Article({ article }) {
  if (!article) return <h1 style={{ padding: "70px 20px 0" }}>Loading...</h1>;
  return <ArticlePage article={article} />;
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const article = await getArticle({ slug: params.slug });

  return {
    props: {
      article,
    },
  };
}
