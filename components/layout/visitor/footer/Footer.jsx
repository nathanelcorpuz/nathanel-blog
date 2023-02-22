import styles from "./Footer.module.css";
import Socials from "@/components/common/socials/Socials";
import FooterNewsletter from "./newsletter/FooterNewsletter";
import FooterProfile from "./profile/FooterProfile";
import getFooterLinks from "@/lib/links/footer";
import FooterNav from "./nav/FooterNav";

const { main, categories } = getFooterLinks();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <FooterProfile />
      <FooterNav links={main.links} title={main.title} />
      <FooterNav links={categories.links} title={categories.title} />
      <FooterNewsletter />
      <aside className={styles.copyright}>
        <small>Nathanel Corpuz &copy; 2023</small>
        <Socials isDark />
      </aside>
    </footer>
  );
}
