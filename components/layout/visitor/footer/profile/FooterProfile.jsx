import logoDark from "@/public/logos/nathanel-corpuz-logo-dark.png";
import Image from "next/image";
import styles from "./FooterProfile.module.css";

export default function FooterProfile() {
  return (
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
  );
}
