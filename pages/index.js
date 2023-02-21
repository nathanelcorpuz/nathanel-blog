import Head from "next/head";
import HomePage from "@/components/pages/home/HomePage";

export default function Home({ previews }) {
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
      <HomePage previews={previews} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/home/previews");
  const previews = await res.json();
  return { props: { previews } };
}
