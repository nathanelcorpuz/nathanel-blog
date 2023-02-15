import SearchPage from "@/components/pages/search/SearchPage";
import { getSearchedArticles } from "@/lib/mock/articles";

export default function Search({ searchQuery, articles }) {
  return <SearchPage searchQuery={searchQuery} articles={articles} />;
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params }) {
  const { searchQuery } = params;

  const articles = await getSearchedArticles({ searchQuery });
  return { props: { articles, searchQuery } };
}
