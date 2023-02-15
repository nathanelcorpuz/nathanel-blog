import styles from "./Footer.module.css";
import Socials from "@/components/common/socials/Socials";
import FooterNavs from "./navs/FooterNavs";
import FooterNewsletter from "./newsletter/FooterNewsletter";
import FooterProfile from "./profile/FooterProfile";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <FooterNavs />
      <FooterNewsletter />
      <FooterProfile />
      <aside className={styles.copyright}>
        <small>Nathanel Corpuz &copy; 2023</small>
        <Socials isDark />
      </aside>
    </footer>
  );
}
