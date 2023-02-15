import CategoryPage from "@/components/pages/category/CategoryPage";
import { getCategoryArticles } from "@/lib/mock/articles";

export default function Category({ articles }) {
  if (!articles) return <h1 style={{ padding: "75px 20px" }}>Loading...</h1>;
  return <CategoryPage articles={articles} />;
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params }) {
  const { category } = params;
  const articles = await getCategoryArticles({ category });
  return {
    props: { articles },
  };
}
