import CategoryPage from "@/components/pages/category/CategoryPage";
import { getCategoryArticles } from "@/lib/mock/articles";

export default function Category({ articles, category }) {
  return <CategoryPage articles={articles} category={category} />;
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params }) {
  const { category } = params;
  const articles = await getCategoryArticles({ category });
  return {
    props: { articles, category },
  };
}
