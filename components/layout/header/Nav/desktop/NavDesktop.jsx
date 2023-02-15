import CustomLink from "@/components/common/custom-link/CustomLink";
import SearchForm from "@/components/common/search-form/SearchForm";
import getHeaderLinks from "@/lib/links/header";
import styles from "./NavDesktop.module.css";

const links = getHeaderLinks();

export default function NavDesktop() {
  return (
    <aside className={styles.aside}>
      <nav>
        <ul>
          {links.main.map((link) => (
            <li key={link.pathname + link.hash + link.title}>
              <CustomLink link={link} />
            </li>
          ))}
        </ul>
      </nav>
      <SearchForm />
    </aside>
  );
}
