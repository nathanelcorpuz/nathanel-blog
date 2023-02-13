import styles from "./Header.module.css";
import logo from "@/public/nathanel-corpuz-logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src={logo} alt="nathanel corpuz logo" width={40} />
      <button
        aria-label="button"
        aria-roledescription="button"
        aria-details="button to open main navigation menu"
        className={styles.button}
      >
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
