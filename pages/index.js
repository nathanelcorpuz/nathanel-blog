import Head from "next/head";
import Image from "next/image";
import logo from "@/public/nathanel-corpuz-logo.png";
import logoDark from "@/public/nathanel-corpuz-logo-dark.png";
import twitter from "@/public/twitter.png";
import linkedin from "@/public/linkedin.png";
import Article from "@/components/article/Article";
import getArticles from "@/lib/mock/articles";
import getFooterLinks from "@/lib/mock/footer";

const articles = getArticles();

const footerLinks = getFooterLinks();

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
      <header>
        <Image src={logo} alt="logo graphics of nathanel corpuz" width={50} />
        <button>menu</button>
      </header>
      <main>
        <h1>Nathanel Corpuz Blog</h1>
        <section>
          <Article article={articles.featured} />
        </section>
        <section>
          <h2>Latest</h2>
          {articles.latest.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </section>
        <section>
          <h2>All</h2>
          {articles.all.map((article) => (
            <Article key={article.id} article={article} />
          ))}
          <button>Show more</button>
        </section>
      </main>
      <footer>
        <nav>
          <h4>{footerLinks.main.title}</h4>
          <ul>
            {footerLinks.main.links.map((link) => (
              <li key={link.pathname + link.title}>{link.title}</li>
            ))}
          </ul>
        </nav>
        <nav>
          <h4>{footerLinks.categories.title}</h4>
          <ul>
            {footerLinks.categories.links.map((link) => (
              <li key={link.pathname + link.title}>{link.title}</li>
            ))}
          </ul>
        </nav>
        <aside>
          <h4>Get more content about websites from yours truly</h4>
          <input placeholder="Your email..." />
          <button>send</button>
          <small>No spam. Unsubscribe anytime.</small>
          <a href="#">Terms & Conditions</a>
        </aside>
        <aside>
          <Image
            src={logoDark}
            width={100}
            alt="dark themed logo of nathanel corpuz"
          />
          <p>
            I design and develop highly customized websites for businesses,
            entrepreneurs, and professionals.
          </p>
          <address>
            <a href="mailto:nathanelwebdesign@gmail.com">
              nathanelwebdesign@gmail.com
            </a>
          </address>
          {/* socials */}
          <div>
            <a
              href="https://twitter.com/nathanelcorpuz"
              rel="noreferrer"
              target="_blank"
            >
              <Image src={twitter} width={50} alt="twitter logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/nathanelcorpuz/"
              rel="noreferrer"
              target="_blank"
            >
              <Image src={linkedin} width={50} alt="twitter logo" />
            </a>
          </div>
        </aside>
        <small>Nathanel Corpuz &copy; 2023</small>
      </footer>
    </>
  );
}
