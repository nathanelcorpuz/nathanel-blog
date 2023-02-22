import Image from "next/image";
import sendIcon from "@/public/icons/send-icon.png";
import styles from "./FooterNewsletter.module.css";

export default function FooterNewsletter() {
  return (
    <form className={styles.newsletter}>
      <label htmlFor="email">Get more simplified content about websites</label>
      <fieldset>
        <input
          name="email"
          type="email"
          id="email"
          placeholder="Your email..."
        />
        <button>
          <Image alt="send button icon" src={sendIcon} />
        </button>
      </fieldset>
      <small>No spam. Unsubscribe anytime.</small>
      <small>
        <a href="#">Terms & Conditions</a>
      </small>
    </form>
  );
}
