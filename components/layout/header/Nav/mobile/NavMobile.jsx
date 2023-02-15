import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./NavMobile.module.css";
import searchIcon from "@/public/search-icon.png";
import getHeaderLinks from "@/lib/links/header";
import CustomLink from "@/components/common/custom-link/CustomLink";
import Socials from "@/components/common/socials/Socials";
import { useState } from "react";
import SearchForm from "@/components/common/search-form/SearchForm";

const links = getHeaderLinks();

export default function NavMobileMenu(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const router = useRouter();
  return (
    <>
      <button
        aria-label="button"
        aria-roledescription="button"
        aria-details="button to open main navigation menu"
        className={`${styles.button} ${isOpen ? styles.button_open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
      </button>
      <aside className={`${styles.aside} ${isOpen && styles.open}`}>
        <SearchForm onSubmitSideEffect={() => setIsOpen(false)} />
        <nav>
          <ul>
            {links.main.map((link) => (
              <li
                key={link.pathname + link.hash + link.title}
                onClick={() => setIsOpen(false)}
              >
                <CustomLink link={link} />
              </li>
            ))}
          </ul>
        </nav>
        <address>
          <a href="mailto:nathanelwebdesign@gmail.com">
            nathanelwebdesign@gmail.com
          </a>
        </address>
        <Socials
          containerStyle={{
            justifyContent: "center",
            gap: 20,
          }}
        />
      </aside>
    </>
  );
}
