import styles from "./ShowMoreBtn.module.css";

export default function ShowMoreBtn(props) {
  return (
    <button className={styles.button} {...props}>
      Show more
    </button>
  );
}
