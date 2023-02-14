import Head from "next/head";
import HomePage from "@/components/pages/home/HomePage";
import MainWrapper from "@/components/common/main-wrapper/MainWrapper";

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
      <MainWrapper>
        <HomePage />
      </MainWrapper>
    </>
  );
}
