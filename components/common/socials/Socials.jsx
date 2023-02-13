import twitterDark from "@/public/socials/twitter-dark.png";
import linkedinDark from "@/public/socials/linkedin-dark.png";
import twitterLight from "@/public/socials/twitter-light.png";
import linkedinLight from "@/public/socials/linkedin-light.png";
import styles from "./Socials.module.css";
import Image from "next/image";

export default function Socials({ isDark, containerStyle }) {
  return (
    <div className={styles.socials} style={containerStyle}>
      <a
        href="https://twitter.com/nathanelcorpuz"
        rel="noreferrer"
        target="_blank"
      >
        <Image
          src={isDark ? twitterDark : twitterLight}
          width={50}
          alt="twitter logo"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/nathanelcorpuz/"
        rel="noreferrer"
        target="_blank"
      >
        <Image
          src={isDark ? linkedinDark : linkedinLight}
          width={50}
          alt="linkedin logo"
        />
      </a>
    </div>
  );
}
