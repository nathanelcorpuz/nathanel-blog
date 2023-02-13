import Socials from "@/components/common/socials/Socials";
import getHeaderLinks from "@/lib/links/header";
import searchIcon from "@/public/search-icon.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Nav.module.css";

const headerLinks = getHeaderLinks();

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
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
        <form>
          <input
            aria-label="search"
            aria-details="search box"
            placeholder="Search..."
          />
          <button aria-label="button" aria-details="search button icon">
            <Image src={searchIcon} alt="search button icon" />
          </button>
        </form>
        <nav>
          <ul>
            {headerLinks.main.map((link) => (
              <li key={link.pathname + link.hash + link.title}>
                {link.externalUrl ? (
                  <a
                    href={link.externalUrl + link.pathname + link.hash}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {link.title}
                  </a>
                ) : (
                  <Link
                    scroll={!link.hash}
                    href={
                      link.hash ? `${link.pathname}${link.hash}` : link.pathname
                    }
                  >
                    {link.title}
                  </Link>
                )}
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
