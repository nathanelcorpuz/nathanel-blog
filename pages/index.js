import Head from "next/head";
import Article from "@/components/common/article/Article";
import getArticles from "@/lib/mock/articles";
import HomeSection from "@/components/home/HomeSection";

const articles = getArticles();

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog - Nathanel Corpuz - Web designer / developer</title>
        <meta
          name="description"
          content="Home page for the blog website of Nathanel Corpuz, a web designer and developer for businesses, entrepreneurs, and professionals."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ display: "flex", flexDirection: "column", gap: 100 }}>
        <HomeSection isFeatured>
          <h1>Nathanel Corpuz Blog</h1>
          <Article article={articles.featured} />
        </HomeSection>
        <HomeSection>
          <h2>Latest</h2>
          {articles.latest.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </HomeSection>
        <HomeSection>
          <h2>All</h2>
          {articles.all.map((article) => (
            <Article key={article.id} article={article} />
          ))}
          <button>Show more</button>
        </HomeSection>
      </main>
    </>
  );
}
