import styles from "./AdminArticlePage.module.css";
import Menu from "./Aside/Aside";
import Preview from "./preview/Preview";

export default function AdminArticlePage() {
  return (
    <div className={styles.article}>
      <Menu />
      <Preview />
    </div>
  );
}
