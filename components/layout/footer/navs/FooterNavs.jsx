import CustomLink from "@/components/common/custom-link/CustomLink";
import getFooterLinks from "@/lib/links/footer";
import styles from "./FooterNavs.module.css";

const footerLinks = getFooterLinks();

export default function FooterNavs() {
  return (
    <div className={styles.navs_container}>
      <nav className={styles.nav}>
        <h4>{footerLinks.main.title}</h4>
        <ul>
          {footerLinks.main.links.map((link) => (
            <li key={link.pathname + link.title}>
              <CustomLink link={link} />
            </li>
          ))}
        </ul>
      </nav>
      <nav className={styles.nav}>
        <h4>{footerLinks.categories.title}</h4>
        <ul>
          {footerLinks.categories.links.map((link) => (
            <li key={link.pathname + link.title}>
              <CustomLink link={link} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
