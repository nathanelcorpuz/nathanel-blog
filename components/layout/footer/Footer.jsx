import styles from "./Footer.module.css";
import logoDark from "@/public/nathanel-corpuz-logo-dark.png";
import getFooterLinks from "@/lib/links/footer";
import Image from "next/image";
import sendIcon from "@/public/send-icon.png";
import Socials from "@/components/common/socials/Socials";

const footerLinks = getFooterLinks();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.navs_container}>
        <nav className={styles.nav}>
          <h4>{footerLinks.main.title}</h4>
          <ul>
            {footerLinks.main.links.map((link) => (
              <li key={link.pathname + link.title}>
                <a href="#">{link.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <nav className={styles.nav}>
          <h4>{footerLinks.categories.title}</h4>
          <ul>
            {footerLinks.categories.links.map((link) => (
              <li key={link.pathname + link.title}>
                <a href="#">{link.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <form className={styles.newsletter}>
        <label htmlFor="email">
          Get more simplified content about websites
        </label>
        <fieldset>
          <input
            name="email"
            type="email"
            id="email"
            placeholder="Your email..."
          />
          <button>
            <Image alt="send button icon" src={sendIcon} />
          </button>
        </fieldset>
        <small>No spam. Unsubscribe anytime.</small>
        <small>
          <a href="#">Terms & Conditions</a>
        </small>
      </form>
      <aside className={styles.profile}>
        <header style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Image
            src={logoDark}
            width={50}
            alt="dark themed logo of nathanel corpuz"
          />
          <h4>Nathanel Corpuz</h4>
        </header>
        <p>
          I design and develop highly customized websites for businesses,
          entrepreneurs, and professionals.
        </p>
        <address>
          <a className={styles.email} href="mailto:nathanelwebdesign@gmail.com">
            nathanelwebdesign@gmail.com
          </a>
        </address>
      </aside>
      <aside className={styles.copyright}>
        <small>Nathanel Corpuz &copy; 2023</small>
        <Socials isDark />
      </aside>
    </footer>
  );
}
