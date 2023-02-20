import CategoryPage from "@/components/pages/category/CategoryPage";

export default function Category({ articles, category }) {
  return <CategoryPage articles={articles} category={category} />;
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params }) {
  const { category } = params;
  const res = await fetch(
    `http://localhost:3000/api/category?category=${category}`
  );
  const articles = await res.json();
  return {
    props: { articles, category },
  };
}
