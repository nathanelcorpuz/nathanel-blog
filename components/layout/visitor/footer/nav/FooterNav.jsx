import styles from "./FooterNav.module.css";
import CustomLink from "@/components/common/custom-link/CustomLink";

export default function FooterNav({ links, title }) {
  return (
    <nav className={styles.nav}>
      <h4>{title}</h4>
      <ul>
        {links.map((link) => (
          <li key={link.pathname + link.title}>
            <CustomLink link={link} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
