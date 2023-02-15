import SearchPage from "@/components/pages/search/SearchPage";
import { getSearchedArticles } from "@/lib/mock/articles";

export default function Search({ query, articles }) {
  return <SearchPage query={query} articles={articles} />;
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params }) {
  const { query } = params;

  const articles = await getSearchedArticles({ query });
  return { props: { articles, query } };
}
