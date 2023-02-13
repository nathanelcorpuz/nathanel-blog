import "@/styles/reset.css";
import "@/styles/base.css";

import { Montserrat } from "@next/font/google";
import Layout from "@/components/layout/Layout";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
