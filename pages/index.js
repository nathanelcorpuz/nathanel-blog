import Head from "next/head";
import HomePage from "@/components/pages/home/HomePage";
import { getMockArticles } from "@/lib/mock/articles";

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Blog - Nathanel Corpuz - Web designer and developer</title>
        <meta
          name="description"
          content="Home page for the blog website of Nathanel Corpuz, a web designer and developer for businesses, entrepreneurs, and professionals."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage articles={articles} />
    </>
  );
}

export async function getStaticProps() {
  const articles = await getMockArticles();
  return { props: { articles } };
}
