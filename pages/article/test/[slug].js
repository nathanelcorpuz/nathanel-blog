import TestArticlePage from "@/components/pages/test-article/TestArticlePage";
import { getTestArticle } from "@/lib/mock/articles";

export default function TestArticle({ article }) {
  return <TestArticlePage article={article} />;
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const article = await getTestArticle({ slug: params.slug });

  return {
    props: {
      article,
    },
  };
}
