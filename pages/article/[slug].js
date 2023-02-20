import ArticlePage from "@/components/pages/article/ArticlePage";
import { useRouter } from "next/router";

export default function Article({ article, related }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }
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
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      article: data.article,
      related: data.related,
    },
  };
}
