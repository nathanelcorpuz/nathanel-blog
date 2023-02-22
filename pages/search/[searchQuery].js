import Layout from "@/components/layout/main/Layout";
import VisitorLayout from "@/components/layout/visitor/VisitorLayout";
import SearchPage from "@/components/pages/search/SearchPage";

export default function Search({ searchQuery, articles }) {
  return <SearchPage searchQuery={searchQuery} articles={articles} />;
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params }) {
  const { searchQuery } = params;
  const res = await fetch(`http://localhost:3000/api/search?q=${searchQuery}`);
  const articles = await res.json();
  return { props: { articles, searchQuery } };
}

Search.getLayout = function getLayout(page) {
  return (
    <Layout>
      <VisitorLayout>{page}</VisitorLayout>
    </Layout>
  );
};
