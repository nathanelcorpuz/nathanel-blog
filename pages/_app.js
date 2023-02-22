import "@/styles/reset.css";
import "@/styles/base.css";

import { Montserrat } from "@next/font/google";
import AdminAuthProvider from "@/contexts/AdminAuthContext";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <AdminAuthProvider>
        {getLayout(<Component {...pageProps} />)}
      </AdminAuthProvider>
    </>
  );
}
