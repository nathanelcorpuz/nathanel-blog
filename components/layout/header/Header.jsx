import styles from "./Header.module.css";
import logo from "@/public/nathanel-corpuz-logo.png";
import Image from "next/image";
import Nav from "./nav/Nav";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src={logo} alt="nathanel corpuz logo" width={40} />
      <Nav />
    </header>
  );
}
